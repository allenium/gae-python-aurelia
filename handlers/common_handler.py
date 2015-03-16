
import logging
import json
import webapp2
import time
import models
from google.appengine.api import search 

log = logging.getLogger(__name__)

from base import RestHandler 

def AsDict(user):
  return {'id': user.key.id(), 'firstName': user.firstName, 'lastName': user.lastName}

def AsSearchDict(userSearch):
  return {'id': userSearch.doc_id, 'firstName': userSearch.fields[0].value, 'lastName': userSearch.fields[1].value}

def Search(user):
  document = search.Document(
    doc_id = str(user.key.id()),
    fields=[
       search.TextField(name='firstName', value=user.firstName),
       search.TextField(name='lastName', value=user.lastName),
       ])

  index = search.Index(name="userIndex")
  index.put(document)

class UserHandler(RestHandler):

  def get(self):
    textSearch = self.request.get('textSearch')
    index = search.Index(name="userIndex")
    results = index.search(textSearch);
    r = [ AsSearchDict(result) for result in results ]
    self.SendJson(r)

  def post(self):
    r = json.loads(self.request.body)
    user = models.InsertUser(r['firstName'], r['lastName'])
    Search(user)
    r = AsDict(user)
    self.SendJson(r)

class UserParamHandler(RestHandler):

  def get(self, userId):
    user = models.FindUser(long(userId))
    r = AsDict(user)
    self.SendJson(r)

  def put(self, userId):
    r = json.loads(self.request.body)
    user = models.UpdateUser(long(userId), r['firstName'], r['lastName'])
    Search(user)
    r = AsDict(user)
    self.SendJson(r)

  def delete(self, userId):
    models.DeleteUser(long(userId))