import categories from 'assets/json/categories.json';
import { useDispatch} from 'react-redux';
import { changeDirectoryPath } from 'redux/slice/directoryPathSlice';
import { Link } from 'react-router-dom';

import { Li } from "./CategorySelection.styled";
// import CategoryPage from 'pages/CategoryPage/CategoryPage';

const CategorySelection = ({ parentId }) => {
  const dispatch = useDispatch();
  
  const categoryChange = value => {
    dispatch(changeDirectoryPath(value));
  };
  
  return (
    <ul>
      {categories.map(
        (el, index) =>
          el.cat_parentId === parentId && (
            <Li
              key={index}
              className={parentId > 0 && 'parent'}
              onMouseEnter={() => categoryChange(el)}
            >
              <Link to="/categories"> {el.cat_name} {' >'}</Link>
              {/* {el.cat_name} {' >'} */}
              {/* <Link to="/categories">
                <CategoryPage category={el}>
                  {el.cat_name} {' >'}
                </CategoryPage>
              </Link> */}
            </Li>
          )
      )}
    </ul>
  );
};

export default CategorySelection;
