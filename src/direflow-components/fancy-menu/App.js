import React, { useContext,useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';

const App = (props) => {
  const fullmenu = [
    {
        "title":"Business Information",
        menu:[
            {"title":"Blogs"},
            {"title":"Email Series"},
            {"title":"Podcasts"},
            {"title":"Market Research"}
        ]
    },
    {
        "title":"Business Transformations",
        "menu":[
          {
            "title":"Transformation Quiz",
            "menu":[
              {
                "title":"Google Form",
                "menu":[
                  {
                    "title":"Book a call back"
                  }
                ]
              }
            ]
          }
        ]
    }
  ]

  const [menu,setmenu] = useState([])

  const addItem=(i)=>{
    setTimeout(function() {
      let newMenu = menu
      newMenu.push(fullmenu[i])
      setmenu([...newMenu])
      if(i<fullmenu.length-1) addItem(i+1)
    }, 200)
  }

  useEffect(()=>{
    addItem(0)
  },[])

  return (
    <Styled styles={styles}>
      <div className='app'>
        <div className="row">
          <div id="start">
              Start
          </div>
          <ul>
            {menu?.map((item)=>
              <li>{item.title}</li>
            )}
          </ul>
        </div>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Fancy Menu',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

App.propTypes = {
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default App;
