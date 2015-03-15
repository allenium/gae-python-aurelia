#!/usr/bin/env python
# -*- coding: utf-8 -*-

from handlers import *

route_list = [
	(r'^/api/get', GetHandler),
	(r'^/api/create', PostHandler),
	(r'^/api/update', PutHandler),
	(r'^/api/delete', DeleteHandler),
	]