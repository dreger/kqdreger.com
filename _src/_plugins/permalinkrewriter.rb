require "Date"

module Jekyll
  class PermalinkRewriter < Generator
    safe true
    priority :low

    def generate(site)
      # Until Jekyll allows me to use :slug, I have to resort to this
      site.posts.each do |item|
        day_of_year = item.date.yday.to_s
        if item.date.yday < 10
          day_of_year = '00'+item.date.yday.to_s
        elsif item.date.yday < 100
          day_of_year = '0'+item.date.yday.to_s
        end

        if item.data['category'].eql? "log-podcast"
          item.data['permalink'] = '/log/' + item.date.strftime('%g') + day_of_year + item.date.strftime('%H%M') + '-' + item.slug + '.html'
        else
          item.data['permalink'] = '/archives/' + item.date.strftime('%g') + day_of_year + '-' + item.slug + '.html'
        end
      end
    end
  end
end