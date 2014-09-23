module Jekyll
  class PermalinkRewriter < Generator
    safe true
    priority :low

    def generate(site)
      site.posts.each do |item|
        item.data['permalink'] = '/archives/' + item.date.strftime('%y%j-') + item.slug + '.html'
      end
    end
  end
end
