GEMLOCK = Gemfile.lock

$(GEMLOCK):
	bundle install

runserver: $(GEMLOCK)
	bundle exec jekyll serve
