# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
Clothing.destroy_all
Brand.destroy_all
UserClothing.destroy_all
Manufacturer.destroy_all
User.destroy_all
puts "seeding"
User.create!([{
    username: "test",
    password: "abc123",
    name:"tester",
  }])
  
  Manufacturer.create!([{
    name: "J & J Leather Enterprises Ltd., Pammal",
    location: "Bangladesh",
    sustainability: "yes",
    image:"https://www.ecotextile.com/images/stories/2019/September/gstar.jpg"
},
{
    name: "Carhartt - sewing plant",
    location: "America",
    sustainability: "yes",
    image:"https://s3-prod.crainsdetroit.com/s3fs-public/carhartt%20cass%20store_i.jpg"
},
{
    name: "Accecuer SA",
    location: "Argentina",
    sustainability: "yes",
    image:"https://s3-prod.crainsdetroit.com/s3fs-public/carhartt%20cass%20store_i.jpg"
},
{
    name: "too many",
    location: "asia, NA",
    sustainability: "yes",
    image:"https://s3-prod.crainsdetroit.com/s3fs-public/carhartt%20cass%20store_i.jpg"
}
])

Brand.create!([
    {
        brandname: "G-star",
        manufacturer: "J & J Leather Enterprises Ltd., Pammal",
        location: "Bangladesh, China, India",
        full_img: "https://www.ecotextile.com/images/stories/2019/September/gstar.jpg",
        image: "https://img1.g-star.com/product/c_fill,f_auto,h_1350,q_80/v1597140032/51002-C622-89-Z01W/g-star-raw-3301-regular-straight-jeans-dark-blue.jpg",
        details:" Around 95% of our production volume (this differs per season) of all G Star suppliers are included in the Manufacturing Map. This tool gives insight into where our products were made, as well as the total number of workers at all factory sites used for G-Star production, the gender balance, as well as any sustainability initiatives or certifications that are in place. We included all direct suppliers that we have been working with for at least two years."
},
{
    brandname: "Carhartt",
    manufacturer: "Carhartt - sewing plant",
    location: "America, Mexico",
    full_img: "https://nmgprod.s3.amazonaws.com/media/files/46/fd/46fde43e608417d673356cfc638b00b7/cover_image_1654013557.jpg.760x400_q85_crop_upscale.jpg",
    image: "https://img1.g-star.com/product/c_fill,f_auto,h_1350,q_80/v1597140032/51002-C622-89-Z01W/g-star-raw-3301-regular-straight-jeans-dark-blue.jpg",
    details:"At Carhartt, our purpose is to build a better world for all hardworking people. This includes every person working to stitch, sew, and put the finishing touches on our products from inside the facilities located on the map below. For this reason, all Carhartt-owned factories and partners are regularly audited by both an approved third-party compliance certification program and by representatives from our own Global Social Responsibility Team to ensure the standards for fair labor practices, safe working conditions, and environmental responsibility are continuously upheld."
},
{
    brandname: "Patagonia",
    manufacturer: "variety",
    location: "asia, north america",
    full_img: "https://www.patagonia.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw7a86798d/images/stores/Reno_curley_j_0114.jpg?q=80&sw=800&",
    image: "https://img1.g-star.com/product/c_fill,f_auto,h_1350,q_80/v1597140032/51002-C622-89-Z01W/g-star-raw-3301-regular-straight-jeans-dark-blue.jpg",
    details:"Like most clothing companies, we dont make our own products or own any of the factories that do. We partner with other companies across the globe and work closely with them to mitigate the harm we collectively create through the manufacturing of clothes. We hold our suppliers (and ourselves) to the highest environmental and social standards in the industry."
},
{
    brandname: "Levi's",
    manufacturer: "variety",
    location: "Bangladesh,  Argentina",
    full_img: "https://s3-prod.adage.com/s3fs-public/20220214_LEVIS383965127_3X2.jpeg",
    image: "https://img1.g-star.com/product/c_fill,f_auto,h_1350,q_80/v1597140032/51002-C622-89-Z01W/g-star-raw-3301-regular-straight-jeans-dark-blue.jpg",
    details:"Like most clothing companies, we dont make our own products or own any of the factories that do. We partner with other companies across the globe and work closely with them to mitigate the harm we collectively create through the manufacturing of clothes. We hold our suppliers (and ourselves) to the highest environmental and social standards in the industry."
}
])


Clothing.create!([
    {
        clothing_type: "jeans",
        brand_id: 1,
        manufacturer_id: 1,
          where_made: "Bangladesh",
          image: "https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/10197641_fpx.tif?$2014_BROWSE_FASHION$&fmt=jpeg&op_usm=0.7,1.0,0.5,0&resMode=sharp2&qlt=85,0&wid=280&hei=350",
},
{
    clothing_type: "jeans",
    brand_id: 1,
    manufacturer_id: 1,
      where_made: "Bangladesh",
      image: "https://img1.g-star.com/product/c_fill,f_auto,h_1038,q_80/v1662469630/D20960-D109-D126-E01/g-star-raw-type-49-relaxed-straight-jeans-grey.jpg",
},
{
clothing_type: "Workpants",
    brand_id: 2,
    manufacturer_id: 2,
      where_made: "America",
      image: "https://imgcdn.carhartt.com/is/image/Carhartt/B11_BRN?fit=constrain,1&wid=798&hei=800&fmt=jpg"
},
{
    clothing_type: "sweater",
    brand_id: 3,
    manufacturer_id: 3,
      where_made: "asia, north america",
      image: "https://cdn.shopify.com/s/files/1/1038/6190/products/25528xSTONEWASHxPrimary_73964317_2000x.jpg?v=1659076235",
},
{
    clothing_type: "jeans",
    brand_id: 4,
    manufacturer_id: 4,
      where_made: "Bangladesh, argentina",
      image: "https://lsco.scene7.com/is/image/lsco/005051456-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&cropN=0,0.35,1,0.65&wid=225&hei=300",
}
])
#   Character.create(name: "Luke", movie: movies.first)
UserClothing.create!([{
  user_id: 1,
  clothing_id: 1
}])
puts "done seeding"
