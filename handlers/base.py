import webapp2
import json
from mako.template import Template
from mako.lookup import TemplateLookup
from webapp2_extras import mako
import logging

log = logging.getLogger(__name__)

mako.default_config.update(dict(
	    input_encoding='utf-8',
	    output_encoding = 'utf-8',
	    default_filters=['decode.utf8']
    ))

class BaseHandler(webapp2.RequestHandler):
    def __init__(self, request, response):
	self.initialize(request, response)

    @webapp2.cached_property
    def mako(self):
	return mako.get_mako(app=self.app)

class RestHandler(webapp2.RequestHandler):

  def dispatch(self):
    #time.sleep(1)
    super(RestHandler, self).dispatch()


  def SendJson(self, r):
    self.response.headers['content-type'] = 'text/plain'
    self.response.write(json.dumps(r))