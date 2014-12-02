# module Jekyll
#   class PermalinkRewriter < Generator
#     safe true
#     priority :low
#
#     def generate(site)
#
#       @site = site
#       site.posts.each do |item|
#         if not item.data['permalink']
#
#           # complete string from 1 to 999 with leading zeros (0)
#           # 1 -> 001 - 20 -> 020
#           day_of_year  = item.date.yday.to_s.rjust(3, '0')
#           file_name    = item.date.strftime('%g') + day_of_year + '-' + item.slug + '.html'
#           permalink    = '/archives/' + file_name
#
#           item.data['permalink'] = permalink
#
#           # get post's datas
#           post_path    = item.containing_dir(@site.source, "")
#           full_path    = File.join(post_path, item.name)
#           file_yaml    = item.data.to_yaml
#           file_content = item.content
#
#           # rewrites the original post with the new Yaml Front Matter and content
#           # writes 'in stone !'
#           File.open(full_path, 'w') do |f|
#             f.puts file_yaml
#             f.puts '---'
#             f.puts "\n\n"
#             f.puts file_content
#           end
#
#           Jekyll.logger.info "Added permalink " + permalink + " to post " + item.name
#         end
#       end
#     end
#   end
# end
