crystal_doc_search_index_callback({"repository_name":"kd_tree","body":"# Kd::Tree\n\n![Crystal CI](https://github.com/geocrystal/kd_tree/workflows/Crystal%20CI/badge.svg?branch=master)\n[![GitHub release](https://img.shields.io/github/release/geocrystal/kd_tree.svg)](https://github.com/geocrystal/kd_tree/releases)\n[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://geocrystal.github.io/kd_tree/)\n[![License](https://img.shields.io/github/license/geocrystal/kd_tree.svg)](https://github.com/geocrystal/kd_tree/blob/master/LICENSE)\n\nCrystal implementation of \"K-Dimensional Tree\" and \"N-Nearest Neighbors\"\nbased on <http://en.wikipedia.org/wiki/Kd-tree>.\n\n## Installation\n\nAdd this to your application's `shard.yml`:\n\n```yaml\ndependencies:\n  kd_tree:\n    github: geocrystal/kd_tree\n```\n\n## Usage\n\n```crystal\nrequire \"kd_tree\"\n```\n\nConstruct a new tree. Each point should be of the form `[x, y]`, where `x` and `y` are numbers(`Int32`, `Float64`, etc):\n\n```crystal\nkd = Kd::Tree(Int32).new(points)\n```\n\nFind the nearest point to `[x, y]`. Returns an array with one point:\n\n```crystal\nkd.nearest([x, y])\n```\n\nFind the nearest `k` points to `[x, y]`. Returns an array of points:\n\n```crystal\nkd.nearest([x, y], k)\n```\n\n## Example\n\n```crystal\nrequire \"kd_tree\"\n\npoints = [\n  [2.0, 3.0],\n  [5.0, 4.0],\n  [4.0, 7.0],\n  [7.0, 2.0],\n  [8.0, 1.0],\n  [9.0, 6.0],\n]\n\nkd = Kd::Tree(Float64).new(points)\n\nkd.nearest([1.0, 1.0])\n# => [[2.0, 3.0]])\n\nkd_tree.nearest([1.0, 1.0], 2)\n# => [[2.0, 3.0], [5.0, 4.0]])\n```\n\n## Performance\n\nUsing a tree with 1 million points `[x, y] of Float64` on my i7-8550U CPU @ 1.80GHz:\n\n```console\nbuild(init)       ~10 seconds\nnearest point     00.000278579\nnearest point 5   00.000693038\nnearest point 50  00.007207470\nnearest point 255 00.134533902\nnearest point 999 08.510465131\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/geocrystal/kd_tree/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [mamantoha](https://github.com/mamantoha) Anton Maminov - creator, maintainer\n","program":{"html_id":"kd_tree/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"kd_tree","program":true,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"kd_tree/Kd","path":"Kd.html","kind":"module","full_name":"Kd","name":"Kd","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"kd_tree","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"{{ (`shards version /__w/kd_tree/kd_tree/src/kd_tree`).chomp.stringify }}","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"kd_tree/Kd/Tree","path":"Kd/Tree.html","kind":"class","full_name":"Kd::Tree(T)","name":"Tree","abstract":false,"superclass":{"html_id":"kd_tree/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"kd_tree/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"kd_tree/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[],"repository_name":"kd_tree","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"kd_tree/Kd","kind":"module","full_name":"Kd","name":"Kd"},"doc":null,"summary":null,"class_methods":[],"constructors":[{"id":"new(points:Array(Array(T)),depth=0)-class-method","html_id":"new(points:Array(Array(T)),depth=0)-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[{"name":"points","doc":null,"default_value":"","external_name":"points","restriction":"Array(Array(T))"},{"name":"depth","doc":null,"default_value":"0","external_name":"depth","restriction":""}],"args_string":"(points : Array(Array(T)), depth = <span class=\"n\">0</span>)","args_html":"(points : Array(Array(T)), depth = <span class=\"n\">0</span>)","location":{"filename":"src/kd_tree.cr","line_number":22,"url":null},"def":{"name":"new","args":[{"name":"points","doc":null,"default_value":"","external_name":"points","restriction":"Array(Array(T))"},{"name":"depth","doc":null,"default_value":"0","external_name":"depth","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = Tree(T).allocate\n_.initialize(points, depth)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"nearest(query:Array(T),n:Int32)-instance-method","html_id":"nearest(query:Array(T),n:Int32)-instance-method","name":"nearest","doc":null,"summary":null,"abstract":false,"args":[{"name":"query","doc":null,"default_value":"","external_name":"query","restriction":"Array(T)"},{"name":"n","doc":null,"default_value":"","external_name":"n","restriction":"Int32"}],"args_string":"(query : Array(T), n : Int32)","args_html":"(query : Array(T), n : Int32)","location":{"filename":"src/kd_tree.cr","line_number":31,"url":null},"def":{"name":"nearest","args":[{"name":"query","doc":null,"default_value":"","external_name":"query","restriction":"Array(T)"},{"name":"n","doc":null,"default_value":"","external_name":"n","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"nearest!(@root, query, [] of Array(T), n)"}},{"id":"nearest(query:Array(T))-instance-method","html_id":"nearest(query:Array(T))-instance-method","name":"nearest","doc":null,"summary":null,"abstract":false,"args":[{"name":"query","doc":null,"default_value":"","external_name":"query","restriction":"Array(T)"}],"args_string":"(query : Array(T))","args_html":"(query : Array(T))","location":{"filename":"src/kd_tree.cr","line_number":27,"url":null},"def":{"name":"nearest","args":[{"name":"query","doc":null,"default_value":"","external_name":"query","restriction":"Array(T)"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"nearest(query, 1)"}},{"id":"root-instance-method","html_id":"root-instance-method","name":"root","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/kd_tree.cr","line_number":17,"url":null},"def":{"name":"root","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@root"}}],"macros":[],"types":[{"html_id":"kd_tree/Kd/Tree/Node","path":"Kd/Tree/Node.html","kind":"class","full_name":"Kd::Tree::Node(T)","name":"Node","abstract":false,"superclass":{"html_id":"kd_tree/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"kd_tree/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"kd_tree/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[],"repository_name":"kd_tree","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"kd_tree/Kd/Tree","kind":"class","full_name":"Kd::Tree(T)","name":"Tree"},"doc":null,"summary":null,"class_methods":[],"constructors":[{"id":"new(pivot:Array(T),split:Int32,left:self?,right:self?)-class-method","html_id":"new(pivot:Array(T),split:Int32,left:self?,right:self?)-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[{"name":"pivot","doc":null,"default_value":"","external_name":"pivot","restriction":"Array(T)"},{"name":"split","doc":null,"default_value":"","external_name":"split","restriction":"Int32"},{"name":"left","doc":null,"default_value":"","external_name":"left","restriction":"self | ::Nil"},{"name":"right","doc":null,"default_value":"","external_name":"right","restriction":"self | ::Nil"}],"args_string":"(pivot : Array(T), split : Int32, left : <span class=\"k\">self</span>?, right : <span class=\"k\">self</span>?)","args_html":"(pivot : Array(T), split : Int32, left : <span class=\"k\">self</span>?, right : <span class=\"k\">self</span>?)","location":{"filename":"src/kd_tree.cr","line_number":8,"url":null},"def":{"name":"new","args":[{"name":"pivot","doc":null,"default_value":"","external_name":"pivot","restriction":"Array(T)"},{"name":"split","doc":null,"default_value":"","external_name":"split","restriction":"Int32"},{"name":"left","doc":null,"default_value":"","external_name":"left","restriction":"self | ::Nil"},{"name":"right","doc":null,"default_value":"","external_name":"right","restriction":"self | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = Node(T).allocate\n_.initialize(pivot, split, left, right)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"left-instance-method","html_id":"left-instance-method","name":"left","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/kd_tree.cr","line_number":6,"url":null},"def":{"name":"left","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@left"}},{"id":"pivot-instance-method","html_id":"pivot-instance-method","name":"pivot","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/kd_tree.cr","line_number":6,"url":null},"def":{"name":"pivot","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@pivot"}},{"id":"right-instance-method","html_id":"right-instance-method","name":"right","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/kd_tree.cr","line_number":6,"url":null},"def":{"name":"right","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@right"}},{"id":"split-instance-method","html_id":"split-instance-method","name":"split","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/kd_tree.cr","line_number":6,"url":null},"def":{"name":"split","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@split"}}],"macros":[],"types":[]}]}]}]}})