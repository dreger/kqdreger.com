---
title: Collision Resistant URIs
date: 2014-02-05 10:27
layout: post
published: false
---
One of the concerns I had with switching over to [Jekyll](http://jekyllrb.com) was that I would no longer be able to rely on a database to ensure that I never had duplicate URIs. This is not a problem for most folks using Jekyll's built in URI handler, because it sets up a default path of:

`site.com/year/month/post-title`

{% highlight ruby %}
require "Date"

module Jekyll
  class PermalinkRewriter < Generator
    safe true
    priority :low

    def generate(site)
      site.posts.each do |item|
        day_of_year = item.date.yday.to_s
        if item.date.yday < 10
          day_of_year = '00'+item.date.yday.to_s
        elsif item.date.yday < 100
          day_of_year = '0'+item.date.yday.to_s
        end
        item.data['permalink'] = '/archives/'
                               + item.date.strftime('%g')
                               + day_of_year
                               + '-'
                               + item.slug + '.html'
      end
    end
  end
end
{% endhighlight %}


which means that every month you could, hypothetically, use "apple-news" as the `post-title` and not worry about colliding with a previous post &mdash; i.e. the `month` part of each URI would be absolutely unique.