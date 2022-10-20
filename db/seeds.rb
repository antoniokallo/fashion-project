# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
Clothing.destroy_all
Brand.destroy_all
Closet.destroy_all
Manufacturer.destroy_all
User.destroy_all


Brand.create!([{
        brandname: "G-star",
        manufacturer: "J & J Leather Enterprises Ltd., Pammal",
        location: "Bangladesh, China, India",
        full_img: "https://www.ecotextile.com/images/stories/2019/September/gstar.jpg",
        image: "https://img1.g-star.com/product/c_fill,f_auto,h_1350,q_80/v1597140032/51002-C622-89-Z01W/g-star-raw-3301-regular-straight-jeans-dark-blue.jpg",
        details:" Around 95% of our production volume (this differs per season) of all G Star suppliers are included in the Manufacturing Map. This tool gives insight into where our products were made, as well as the total number of workers at all factory sites used for G-Star production, the gender balance, as well as any sustainability initiatives or certifications that are in place. We included all direct suppliers that we have been working with for at least two years."
}])



Manufacturer.create!([{
        name: "J & J Leather Enterprises Ltd., Pammal",
        location: "Bangladesh",
        sustainability: "yes",
        image:"https://www.ecotextile.com/images/stories/2019/September/gstar.jpg"
}])
      

User.create!([{
  username: "test",
  password: "abc123",
  name:"tester",
}])


Clothing.create!([{
        clothing_type: "jeans",
        brand_id: 1,
        manufacturer_id: 1,
        closet_id: 1,
          where_made: "Bangladesh",
          image: "https://img1.g-star.com/product/c_fill,f_auto,h_1350,q_80/v1597140032/51002-C622-89-Z01W/g-star-raw-3301-regular-straight-jeans-dark-blue.jpg",
}])
#   Character.create(name: "Luke", movie: movies.first)
Closet.create!([{
  user_id: 1,
  clothing_id: 1
}])
