User.destroy_all
Senator.destroy_all

gracie = User.create({email: 'gracie@gracie.com', username: 'gracie', password: 'test'})

senators = Senator.create(
  [
    { name: 'Lamar Alexander',
     state: 'TN',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.alexander.senate.gov/public/index.cfm/email',
     image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Lamar_Alexander_official_photo.jpg'
    },
   { name: 'Tammy Baldwin',
     state: 'WI',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.baldwin.senate.gov/feedback',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tammy_Baldwin%2C_official_portrait%2C_113th_Congress.jpg/946px-Tammy_Baldwin%2C_official_portrait%2C_113th_Congress.jpg'
    },
    { name: 'John Barrasso',
     state: 'WY',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.barrasso.senate.gov/public/index.cfm/contact-form',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/John_Barrasso_official_portrait_112th_Congress.jpg/440px-John_Barrasso_official_portrait_112th_Congress.jpg'
   },
   { name: 'Michael Bennet',
     state: 'CO',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://michaelbennet.com/about/',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Michael_Bennet_Official_Photo.jpg/440px-Michael_Bennet_Official_Photo.jpg'
    },
    { name: 'Marsha Blackburn',
     state: 'TN',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.blackburn.senate.gov/contact_marsha',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sen._Marsha_Blackburn_%28R-TN%29_official_headshot_-_116th_Congress.jpg/440px-Sen._Marsha_Blackburn_%28R-TN%29_official_headshot_-_116th_Congress.jpg'
     },
     { name: 'Richard Blumenthal',
     state: 'CT',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.blumenthal.senate.gov/contact/',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Richard_Blumenthal_Official_Portrait.jpg/1200px-Richard_Blumenthal_Official_Portrait.jpg'
    },
    { name: 'Roy Blunt',
     state: 'MO',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.blunt.senate.gov/contact/contact-roy',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Roy_Blunt%2C_Official_Portrait%2C_112th_Congress.jpg/440px-Roy_Blunt%2C_Official_Portrait%2C_112th_Congress.jpg'
    },
    { name: 'Cory Booker',
     state: 'NJ',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.booker.senate.gov/?p=contact',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg/440px-Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg'
    },
    { name: 'John Boozman',
     state: 'AR',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.boozman.senate.gov/public/index.cfm/contact',
     image: 'https://pbs.twimg.com/profile_images/970776346250104834/i7B-Xp9G_400x400.jpg'
   },
   { name: 'Mike Braun',
     state: 'IN',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.braun.senate.gov/contact-mike',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mike_Braun%2C_Official_Portrait%2C_116th_Congress.jpg/220px-Mike_Braun%2C_Official_Portrait%2C_116th_Congress.jpg'
   },
   { name: 'Sherrod Brown',
     state: 'OH',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.brown.senate.gov/contact/email',
     image: 'https://pbs.twimg.com/profile_images/523158370333638657/cLmYIfYa_400x400.jpeg'
   },
   { name: 'Richard Burr',
     state: 'NC',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.burr.senate.gov/contact/',
     image: 'https://pbs.twimg.com/profile_images/588079658819653632/wwdO4Eqv_400x400.jpg'
   },
   { name: 'Maria Cantwell',
     state: 'WA',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.cantwell.senate.gov/contact/email',
     image: 'https://votesmart.org/canphoto/27122_lg.jpg'
   },
   { name: 'Shelley Moore Capito',
     state: 'WV',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.capito.senate.gov/contact/contact-shelley',
     image: 'https://pbs.twimg.com/profile_images/570247761044312064/gBmXhrin.jpeg'
     },
   { name: 'Benjamin Cardin',
     state: 'MD',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.cardin.senate.gov/contact',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ben_Cardin_official_Senate_portrait.jpg/440px-Ben_Cardin_official_Senate_portrait.jpg'
    },
    { name: 'Thomas Carper',
      state: 'DE',
      party: 'D',
      naacp_rating: '0',
      pp_rating: '0',
      envi_rating: '0',
      nra_rating: '0',
      trump_rating: '0',
      contact: 'https://www.carper.senate.gov/public/index.cfm/contact',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tom_Carper%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/832px-Tom_Carper%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg'
    },
    { name: 'Robert Casey Jr.',
     state: 'PA',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.casey.senate.gov/contact',
     image: 'https://cdn.britannica.com/86/132786-004-FC70DDEA.jpg'
    },
    { name: 'Bill Cassidy',
     state: 'LA',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.cassidy.senate.gov/contact/',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bill_Cassidy_official_Senate_photo.jpg/440px-Bill_Cassidy_official_Senate_photo.jpg'
    },
    { name: 'Susan Collins',
     state: 'ME',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.collins.senate.gov/contact',
     image: 'https://www.bates.edu/news/files/2017/04/Collins-Susan-2017-honorand-1389-vert-1080x.jpg'
    },
    { name: 'Christopher Coons',
     state: 'DE',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.coons.senate.gov/contact',
     image: 'https://votesmart.org/canphoto/122834_lg.jpg'
    },
    { name: 'John Cornyn',
     state: 'TX',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.cornyn.senate.gov/contact',
     image: 'https://yt3.ggpht.com/a-/AAuE7mCFnI3jzjVOKXbwFZwhjQd4RLSMS4iX7d-25Q=s900-mo-c-c0xffffffff-rj-k-no'
    },
    { name: 'Catherine Cortez Masto',
     state: 'NV',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.cortezmasto.senate.gov/contact',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Catherine_Cortez_Masto_official_portrait.jpg/1200px-Catherine_Cortez_Masto_official_portrait.jpg'
    },
    { name: 'Tom Cotton',
     state: 'AR',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.cotton.senate.gov/?p=contact',
     image: 'https://pbs.twimg.com/profile_images/568884049058357248/M-VeVL9u.jpeg'
    },
    { name: 'Kevin Cramer',
     state: 'ND',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.cramer.senate.gov/contact_kevin',
     image: 'https://radiocms-images.us1.eldarioncloud.com/resize/1200/https://storage.googleapis.com/media.mwcradio.com/podblogs/uploads/Kevin_Cramer_official_photo.jpg'
    },
    { name: 'Mike Crapo',
     state: 'ID',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.crapo.senate.gov/contact/email-me',
     image: 'https://www.boisestatepublicradio.org/sites/idaho/files/styles/x_large/public/201902/Mike_Crapo_official_photo.jpg'
    },
    { name: 'Ted Cruz',
     state: 'TX',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.cruz.senate.gov/?p=form&id=16',
     image: 'https://1.bp.blogspot.com/-fw6r5Ozi96E/WJzUfUh5XgI/AAAAAAAAAaA/HrsVuuk0sr0qQREAb9nit7VMjrxUp1_zQCPcBGAYYCw/s640/The%2BZodiac%2BKiller%2B1969.png'
    },
    { name: 'Steve Daines',
     state: 'MT',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.daines.senate.gov/connect/email-steve',
     image: 'https://bloximages.newyork1.vip.townnews.com/montanakaimin.com/content/tncms/assets/v3/editorial/f/01/f0195f92-60bd-11e4-abc0-0017a43b2370/54531cc17a09a.image.jpg?resize=400%2C601'
    },
    { name: 'Tammy Duckworth',
     state: 'IL',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://action.tammyduckworth.com/page/signup/contact-us',
     image: 'https://pbs.twimg.com/profile_images/1003647516754305025/ITpJ_LMV_400x400.jpg'
    },
    { name: 'Richard Durbin',
     state: 'IL',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.durbin.senate.gov/contact/email',
     image: 'http://mediad.publicbroadcasting.net/p/wsiu/files/styles/x_large/public/201508/durbin.jpg'
    },
    { name: 'Michael Enzi',
     state: 'WY',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.enzi.senate.gov/public/index.cfm/e-mail-senator-enzi',
     image: 'https://prayforpoliticians.files.wordpress.com/2010/09/sen-michael-enzi-r-wyoming.jpg'
    },
    { name: 'Joni Ernst',
     state: 'IA',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.ernst.senate.gov/public/index.cfm/email-joni',
     image: 'http://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201901/joni_ernst.jpeg'
    },
    { name: 'Dianne Feinstein',
     state: 'CA',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.feinstein.senate.gov/public/index.cfm/contact',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Dianne_Feinstein%2C_official_Senate_photo_2.jpg/440px-Dianne_Feinstein%2C_official_Senate_photo_2.jpg'
    },
    { name: 'Deb Fischer',
     state: 'NE',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.fischer.senate.gov/public/index.cfm/contact',
     image: 'https://d3n8a8pro7vhmx.cloudfront.net/hddata/pages/2110/features/original/debfischer_home_portrait5.jpg?1543592969'
    },
    { name: 'Cory Gardner',
     state: 'CO',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.gardner.senate.gov/contact-cory/email-cory',
     image: 'https://media1.fdncms.com/csindy/imager/u/original/6243520/1200px-cory_gardner_official_portrait_112th_congress.jpg'
    },
    { name: 'Kirsten Gillibrand',
     state: 'NY',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.gillibrand.senate.gov/contact/email-me',
     image: 'https://genconnectu.com/wp-content/uploads/2015/08/kirsten-gillibrand.jpg'
    },
    { name: 'Lindsey Graham',
     state: 'SC',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.lgraham.senate.gov/public/index.cfm/e-mail-senator-graham',
     image: 'https://www.smdp.com/wp-content/uploads/2019/03/1920px-Lindsey_Graham_Official_Portrait_2006.jpg'
    },
    { name: 'Chuck Grassley',
     state: 'IA',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.grassley.senate.gov/constituents/questions-and-comments',
     image: 'https://americanagnetwork.com/wp-content/uploads/2018/03/Chuck_Grassley_official_photo_2017.jpg'
    },
    { name: 'Kamala Harris',
     state: 'CA',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.harris.senate.gov/contact/email',
     image: 'https://lasentinel.net/wp-content/uploads/sites/5/2018/03/kamalaharris_official_hires.jpg'
    },
    { name: 'Margaret Wood Hassan',
     state: 'NH',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.hassan.senate.gov/contact/email',
     image: 'https://www.senate.gov/artandhistory/history/resources/graphic/xlarge/HassanMaggie.jpg'
    },
    { name: 'Josh Hawley',
     state: 'MO',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.hawley.senate.gov/contact-senator-hawley',
     image: 'https://d3n8a8pro7vhmx.cloudfront.net/mbamissouri/mailings/4/attachments/original/hawley.jpg?1534215879'
    },
    { name: 'Martin Heinrich',
     state: 'NM',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.heinrich.senate.gov/contact/write-martin',
     image: 'https://cdn.civil.services/us-senate/headshots/1024x1024/martin-heinrich.jpg'
    },
    { name: 'Mazie Hirono',
     state: 'HI',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.hirono.senate.gov/contact',
     image: 'http://honolulumagazine-images.dashdigital.com/images/2018/07-18/MazieHirono_headshot.jpg?ver=1532392971'
    },
    { name: 'Joe Hoeven',
     state: 'ND',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.hoeven.senate.gov/contact/email-the-senator',
     image: 'http://editions.lib.umn.edu/smartpolitics/wp-content/uploads/sites/2/2016/11/johnhoeven30.jpg'
    },
    { name: 'Cindy Hyde-Smith',
     state: 'MS',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://cindyhydesmith.com/contact/',
     image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cindy_Hyde-Smith_official_photo.jpg'
    },
    { name: 'James Inhofe',
     state: 'OK',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.inhofe.senate.gov/contact',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Jim_Inhofe_official_portrait.jpg/440px-Jim_Inhofe_official_portrait.jpg'
    },
    { name: 'Johnny Isakson',
     state: 'GA',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: 'https://www.isakson.senate.gov/public/index.cfm/contact-me',
     image: 'http://modernizeaid.net/wp-content/uploads/2011/04/isakson.jpg'
    },
    { name: 'Ron Johnson',
     state: 'WI',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/1213023547/Twitter_2_400x400.jpg'
    },
    { name: 'Doug Jones',
     state: 'AL',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://i0.wp.com/greenecodemocrat.com/wp-content/uploads/2017/11/1200px-doug_jones_flag.jpeg?resize=562%2C597&ssl=1'
    },
    { name: 'Tim Kaine',
     state: 'VA',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://blackeconomicalliance.org/app/uploads/2018/08/Senator-Tim-Kaine-800x800.jpg'
    },
    { name: 'John Kennedy',
     state: 'LA',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/831592195320840192/GXfc24bb_400x400.jpg'
    },
    { name: 'Angus King Jr.',
     state: 'ME',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/378800000406004520/c5e846a94969202654cf1ac5fafc3659_400x400.jpeg'
    },
    { name: 'Amy Klobuchar',
     state: 'MN',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'http://knsiradio.com/application/files/5415/4989/5797/Amy_Klobuchar.jpg'
    },
    { name: 'James Lankford',
     state: 'OK',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/James_Lankford%2C_Official_Portrait%2C_112th_Congress.jpg'
    },
    { name: 'Patrick Leahy',
     state: 'VT',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.oceanchampions.org/wp-content/uploads/2015/07/patrick.leahy_.jpg'
    },
    { name: 'Mike Lee',
     state: 'UT',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/378800000680617902/5c3f55ed6c09f8e7ed0da662d944b8dc.jpeg'
    },
    { name: 'Joe Manchin III',
     state: 'WV',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pixel.nymag.com/imgs/daily/intelligencer/2018/10/08/8-manchin.w700.h700.jpg'
    },
    { name: 'Edward Markey',
     state: 'MA',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://votesmart.org/canphoto/26900_lg.jpg'
    },
    { name: 'Mitch McConnell',
     state: 'KY',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.biography.com/.image/t_share/MTQzMzQ5Mjg4NTY5Njc3Mzgz/mitch-mcconnell-official-senate-portrait_1600jpg.jpg'
    },
    { name: 'Martha McSally',
     state: 'AZ',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://media2.fdncms.com/tucsonweekly/imager/u/original/23139287/5be31019b37e1.image.jpg'
    },
    { name: 'Robert Menendez',
     state: 'NJ',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: ''
    },
    { name: 'Jeff Merkley',
     state: 'OR',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://yt3.ggpht.com/a-/AAuE7mCCINew5l51ZhMCGSsavEvGwQiH-FHI-QcyuQ=s900-mo-c-c0xffffffff-rj-k-no'
    },
    { name: 'Jerry Moran',
     state: 'KS',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.moran.senate.gov/public/?a=Files.Serve&File_id=7E1128DE-E5AA-4892-A949-DF3349A2CD09'
    },
    { name: 'Lisa Murkowski',
     state: 'AK',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Lisa_Murkowski.jpg'
    },
    { name: 'Christopher Murphy',
     state: 'CT',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'http://scribblers.us/tj/wp-content/uploads/2014/10/Chris_Murphy_official_photo.jpg'
    },
    { name: 'Patty Murray',
     state: 'WA',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.sos.wa.gov/legacy/women-in-government/patty-murray/main.jpg'
    },
    { name: 'Rand Paul',
     state: 'KY',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/681152691461042177/_PrgDgFA_400x400.jpg'
    },
    { name: 'David Perdue',
     state: 'GA',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/821843329008680967/zqpECZrD_400x400.jpg'
    },
    { name: 'Gary Peters',
     state: 'MI',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'http://mediad.publicbroadcasting.net/p/wemu/files/styles/x_large/public/201902/Peters_Gary_official_portrait.jpg'
    },
    { name: 'Rob Portman',
     state: 'OH',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.oceanchampions.org/wp-content/uploads/2015/07/rob.portman.jpg'
    },
    { name: 'Jack Reed',
     state: 'RI',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.reed.senate.gov/imo/media/image/contact-jack.jpg'
    },
    { name: 'James Risch',
     state: 'ID',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/3161364149/32f2f83385840438a393070a7e426bde_400x400.jpeg'
    },
    { name: 'Pat Roberts',
     state: 'KS',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/981951337536671744/8z6P2Eck_400x400.jpg'
    },
    { name: 'Mitt Romney',
     state: 'UT',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pixel.nymag.com/imgs/daily/intelligencer/2018/02/16/16-romney-utah.w700.h700.jpg'
    },
    { name: 'Jacky Rosen',
     state: 'NV',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/988891773349982208/LL_DHO23_400x400.jpg'
    },
    { name: 'Mike Rounds',
     state: 'SD',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://radiocms-images.us1.eldarioncloud.com/resize/750/https://storage.googleapis.com/media.mwcradio.com/mimesis/2017-05/16/mike_rounds.jpg'
    },
    { name: 'Marco Rubio',
     state: 'FL',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'http://floridapolitics.com/wp-content/uploads/2017/11/ct-marco-rubio-donald-trump.jpg'
    },
    { name: 'Bernard Sanders',
     state: 'VT',
     party: 'I',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg'
    },
    { name: 'Ben Sasse',
     state: 'NE',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://cdn.britannica.com/96/183096-004-9387ABDD.jpg'
    },
    { name: 'Brian Schatz',
     state: 'HI',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Brian_Schatz_official_portrait.jpg'
    },
    { name: 'Charles Schumer',
     state: 'NY',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://hollandsheroes.files.wordpress.com/2015/07/chuckschumer.jpg'
    },
    { name: 'Tim Scott',
     state: 'SC',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tim_Scott%2C_official_portrait%2C_113th_Congress.jpg/1200px-Tim_Scott%2C_official_portrait%2C_113th_Congress.jpg'
    },
    { name: 'Rick Scott',
     state: 'FL',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.jurist.org/news/wp-content/uploads/sites/4/2014/06/Governor-Rick-Scott.jpg'
    },
    { name: 'Jeanne Shaheen',
     state: 'NH',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.nhpr.org/sites/nhpr/files/styles/medium/public/201902/jeanne_shaheen__official_senate_portrait_cropped.jpg'
    },
    { name: 'Richard Shelby',
     state: 'AL',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://cdn.britannica.com/56/132856-004-B1BA95C5.jpg'
    },
    { name: 'Kyrsten Sinema',
     state: 'AZ',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://qvoicenews.com/wp-content/uploads/2018/11/Kyrsten-Sinema.jpg'
    },
    { name: 'Tina Smith',
     state: 'MN',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://img.apmcdn.org/c35c2de9821f98300dfcaa7e1203671076df495e/normal/bb776c-20180215-sen-tina-smith.jpg'
    },
    { name: 'Debbier Stabenow',
     state: 'MI',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/735149032096604161/co-FGACV_400x400.jpg'
    },
    { name: 'Dan Sullivan',
     state: 'AK',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.talkeetnachamber.org/wp-content/uploads/2017/10/senator-dan-sullivan.jpg'
    },
    { name: 'Jon Tester',
     state: 'MT',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'http://mediad.publicbroadcasting.net/p/kufm/files/styles/x_large/public/201407/Jon_Tester.jpg'
    },
    { name: 'John Thune',
     state: 'SD',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'http://mediad.publicbroadcasting.net/p/sdpb/files/styles/medium/public/201804/john_thune_credit_wnax_dot_com.jpg'
    },
    { name: 'Thom Tillis',
     state: 'NC',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.tillis.senate.gov/public/vendor/_skins/default/images/facebook_tillis.jpg'
    },
    { name: 'Patrick Toomey',
     state: 'PA',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Pat_Toomey_Congress.jpg'
    },
    { name: 'Tom Udall',
     state: 'NM',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/847475846944182272/HKMEaecM_400x400.jpg'
    },
    { name: 'Chris Van Hollen',
     state: 'MD',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/943708990449618944/0XSZE4Et_400x400.jpg'
    },
    { name: 'Mark Warner',
     state: 'VA',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://pbs.twimg.com/profile_images/944243549922582528/DyFwGriJ_400x400.jpg'
    },
    { name: 'Elizabeth Warren',
     state: 'MA',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress_%28cropped%29%282%29.jpg/1200px-Elizabeth_Warren%2C_official_portrait%2C_114th_Congress_%28cropped%29%282%29.jpg'
    },
    { name: 'Sheldon Whitehouse',
     state: 'RI',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://www.oceanchampions.org/wp-content/uploads/2015/07/sheldon.whitehouse.jpg'
    },
    { name: 'Roger Wicker',
     state: 'MS',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/U.S._Senator_Roger_F._Wicker_Official_Portrait%2C_2018.jpg'
    },
    { name: 'Ron Wyden',
     state: 'OR',
     party: 'D',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://youthtoday.org/wp-content/uploads/sites/13/2016/07/Ron_Wyden_official_portrait_crop.jpg'
    },
    { name: 'Todd Young',
     state: 'IN',
     party: 'R',
     naacp_rating: '0',
     pp_rating: '0',
     envi_rating: '0',
     nra_rating: '0',
     trump_rating: '0',
     contact: '',
     image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Senator_Todd_Young_official_portrait.jpg'
    }
  ]
)
