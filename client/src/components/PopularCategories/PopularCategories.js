import React,{ useEffect , useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPopularCategories } from '../../redux/popularCategories/popularCategoriesActions.js'
import Category from './Category.js';
import './popularCategories.css'

function PopularCategories(props) {

    let popularCategories =  useSelector(state => state.popularCategoriesReducers.popularCategories);
    let popularCategories1;
    let categoriesRecieved  = useSelector(state => state.popularCategoriesReducers.categoriesRecieved);
    const dispatch = useDispatch();
    const[ individualChk , setIndividualChk ] = useState(false);

    useEffect(()=>{
        dispatch(getPopularCategories());
        //individualChk=true;
        console.log("popular categories component");
       setIndividualChk(true);
       console.log("val of ind vhk is"+ individualChk)
    },[])

        if(popularCategories!="" && individualChk==true){
            console.log(popularCategories);
            let last;
            if(props.part==0){
                last=7;
            }
            else{
                last=14
            }
            popularCategories1=popularCategories.slice(props.part,last);
        }
        
    

    
        
        return (
            <div className="container">
                <div className="epc-wrapper">
                    <h3 className="epc" >Explore Popular Categories</h3>
                </div>
               
                <div className="pc-category-root-wrapper">
                {
                    categoriesRecieved && individualChk==true? 
                    popularCategories1.map((popularCategory) => {
                        console.log(popularCategory);
                        return (
                            <div key={popularCategory._id} className="pc-category-wrapper">
                                <Category  CategoryInfo={popularCategory} />
                            </div>
                        )
                    }) : ""
                   
                }
                </div>
                
               
            </div>
        )
    
    
   
}

export default PopularCategories
