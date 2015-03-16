#!/usr/bin/env python
# -*- coding: utf-8 -*-

from handlers import *

route_list = [
	(r'^/api/user', UserHandler),
	(r'^/api/user/(\d+)', UserParamHandler),
	]