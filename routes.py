#!/usr/bin/env python
# -*- coding: utf-8 -*-

from handlers import *

route_list = [
	(r'^/api/(\d+)', GetHandler),
	(r'^/api/list', ListHandler),
	(r'^/api/create', PostHandler),
	(r'^/api/update', PutHandler),
	(r'^/api/delete', DeleteHandler),
	]