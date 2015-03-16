
import logging
import json
import webapp2
import time
import models

log = logging.getLogger(__name__)

from base import RestHandler 

def AsDict(user):
  return {'id': user.key.id(), 'firstName': user.firstName, 'lastName': user.lastName}

class ListHandler(RestHandler):

  def get(self):
    users = models.AllUsers()
    r = [ AsDict(user) for user in users ]
    self.SendJson(r)

class GetHandler(RestHandler):

  def get(self, userId):
    user = models.FindUser(long(userId))
    r = AsDict(user)
    self.SendJson(r)

class PutHandler(RestHandler):

  def post(self, userId):
    r = json.loads(self.request.body)
    user = models.UpdateUser(long(userId), r['firstName'], r['lastName'])
    r = AsDict(user)
    self.SendJson(r)

class PostHandler(RestHandler):

  def post(self):
    r = json.loads(self.request.body)
    user = models.InsertUser(r['firstName'], r['lastName'])
    r = AsDict(user)
    self.SendJson(r)

class DeleteHandler(RestHandler):

  def post(self):
    r = json.loads(self.request.body)
    models.DeleteUser(r['id'])
