from google.appengine.ext import ndb

class User(ndb.Model):
  firstName = ndb.StringProperty()
  lastName = ndb.StringProperty()

def AllUsers():
  return User.query()

def FindUser(id):
  return User.get_by_id(id)

def UpdateUser(id, firstName, lastName):
  user = User(id=id, firstName=firstName, lastName=lastName)
  user.put()
  return user

def InsertUser(firstName, lastName):
  user = User(firstName=firstName, lastName=lastName)
  user.put()
  return user

def DeleteUser(id):
  key = ndb.Key(User, id)
  key.delete()