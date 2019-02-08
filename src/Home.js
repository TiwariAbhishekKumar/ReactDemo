import React from 'react';



// const Home = () => (
//     <div className='clsdiv'>
//       <h2>Hello Abhishek! Welcome in component demo</h2>
//     </div>
   
//   );


const Home = () => {
    return React.createElement('div', { id: 'divid', className:'clsdiv'},
    React.createElement('h1',null, 'Hello Abhishek! Welcome in component demo')
   );

}
  
export default Home;