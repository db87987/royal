# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# require 'csv'
# 
# puts "Importing regions..."
# CSV.foreach(Rails.root.join("regions.csv"), headers: true) do |row|
#   Region.create! do |region|
#     region.id = row[0]
#     region.name = row[1]
#   end
# end



Rake::Task['db:create_cases'].invoke
Rake::Task['db:test_brands'].invoke
Rake::Task['db:test_taxonomies'].invoke
Rake::Task['db:test_nested_taxons'].invoke
Rake::Task['db:create_products'].invoke
Rake::Task['db:positions_to_products'].invoke
Rake::Task['db:create_seo_data_objects'].invoke
Rake::Task['db:test_events'].invoke
Rake::Task['db:test_articles'].invoke
Rake::Task['db:test_partners'].invoke
Rake::Task['db:test_nested_procedure_categories'].invoke
Rake::Task['db:stage_images'].invoke
Rake::Task['db:test_procedures'].invoke
Taxon.find_each(&:save!)
Taxonomy.find_each(&:save!)
Taxon.rebuild!
