import classes from './Experience.module.css';

import Card from './cards/Card';

const Experience = (props) => {
  return (
    <>
      
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes['item-1']}>
            <Card 
              color={'#99E32B'}
              title={'ACI Worldwide'}  
              heading={'Software Engineer'}
              rotate={'-1'}
            >
              My time at ACI gave me greater insight into the payments world and helped me develop a strong solution orientated mindset.
            </Card>
          </div>

          <div className={classes['item-2']}>
            <Card 
              color={'#99E32B'}
              title={'ACI Worldwide'}  
              heading={'Software Engineer'}
              accentText={'February 2019 - May 2021'}
              summary={'My time at ACI gave me greater insight into the payments world and helped me develop a strong solution orientated mindset.'}
              tags={['Java', 'SQL', 'Python', 'Jenkins']}
            >
              <p className="mt-1">
                My time at ACI gave me greater insight into the payments world, but more than that, it helped me develop a strong solution orientated mindset, developed my customer interfacing skills and allowed me to discover my love for writing high- and low-level designs. The nature of the industry meant that there were often very tight deadlines, this helped me develop self-management skills but also taught me to excel under pressure.
              </p>
              <p>Some of the roles I have filled:</p>
              <ul>
                <li><b>Designer:</b> Interpret customer specifications to write high- and low-level designs.</li>
                <li><b>Coder:</b> Implement designs efficiently with thorough testing.</li>
                <li><b>Technical Writer:</b> Write concise client focused documentation (user guides, release notes).</li>
                <li><b>Support:</b> L3 Support across a range of 100+ products. This includes taking on the role of Issue Manager for a period of time.</li>
              </ul>
            </Card>
          </div>

          <div className={classes['item-3']}>
            <Card 
              color={'#FF8181'}
              title={'Mezzanine'}  
              heading={'Full Stack Developer'}
              accentText={'June 2021 - Currently'}
              summary={'My time at Mezzanine has given me a great appreciation for the impact that new technology can have when introduced in developing countries.'}
              rotate={'-0.5'}
              tags={['Java', 'Vue.js', 'PostgreSQL', 'HTML', 'CSS', 'Docker']}
            >
              <p className="mt-1">
               Mezzanine's mission statement is to create productive societies by designing fit for purpose digital solutions in the industries of agriculture, health, social services and education. I worked mainly on Connected Farmer Plus, a marketplace for farmers to facilitate loans, insurance, the purchase of inputs and equipment as well as the offtake of produce.
              </p>
              <p className="mt-1">
                My time at Mezzanine gave me a solid understanding of REST and UI/UX principles, but more importantly, it gave me a greater appreciation for the impact that new technology could have when introduced in developing nations like those in East-Africa.
              </p>
            </Card>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Experience;