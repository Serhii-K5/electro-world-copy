import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Link } from 'react-router-dom';
import {
  DivNav,
  DivCatalog,
  Sup,
  UlCatalog,
  Img,
  NavContainer,
  NavLinkStyle,
  Span,
} from "./NavLinkBar.styled";

import { useDispatch, useSelector } from 'react-redux';
import { selectDirectoryPath, selectLanguages } from 'redux/selectors';
// import { selectOrders } from "redux/selectors";
// import { addDirectoryPath, changeDirectoryPath, deleteDirectoryPath, deleteAllDirectoryPath } from 'redux/slice/directoryPathSlice';
import { deleteAllDirectoryPath } from 'redux/slice/directoryPathSlice';

import MessageModule from "components/MessageModule/MessageModule";
// import CatalogModule from 'components/CatalogModule/CatalogModule';
import CategorySelection from 'components/CategorySelection/CategorySelection';
import lang from "assets/json/language.json";
// import category from "assets/json/category.json";
// import DropdownButton from '../DropdownButton/DropdownButton';


import { GiHamburgerMenu } from "react-icons/gi";
import electricity from "assets/images/svg/electricity.svg";

// import { selectCategories } from 'redux/selectors';
// import { changeCategory } from 'redux/slice/categorySlice';


const NavLinkBar = () => {
  const dispatch = useDispatch();
  const directoryPath = useSelector(selectDirectoryPath); 
  const languages = useSelector(selectLanguages);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isModalCatalogShown, setIsModalCatalogShown] = useState(false);
  const [isChangeModalCatalog, setIsChangeModalCatalog] = useState(false);

  // const category = useSelector(selectCategories);

  
  useEffect(() => {
    directoryPath > 0
      ? setIsChangeModalCatalog(true)
      : setIsChangeModalCatalog(false);    
  }, [directoryPath]);  
  
  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onOpenModal = () => {
    setIsModalShown(true);
    console.log(isChangeModalCatalog);
  };

  const onOpenCatalogModal = () => {
    setIsModalCatalogShown(true);
  };

  const clearingDirectoryPath = () => {
    dispatch(deleteAllDirectoryPath());
    setIsModalCatalogShown(false);
  };

  // const createCategory = (id) => {
  //   dispatch(changeCategory(id));
  //   return <CategorySelection parentId={id} />;
  // };
  

  return (
    <>
      <DivNav>
        <div
          onMouseEnter={onOpenCatalogModal}
          onMouseLeave={clearingDirectoryPath}
        >
          <div>
            <DivCatalog>
              <GiHamburgerMenu
                style={{ marginRight: '10px', fontSize: '24px' }}
              />
              <div>
                <Sup>{lang[languages].NavLinkBar_catalog1.toUpperCase()}</Sup>
              </div>
            </DivCatalog>
            {isModalCatalogShown && (
              <UlCatalog>
                <li key={0} style={{ border: '1px solid grey' }}>
                  <CategorySelection parentId={0} />
                  {/* {() => createCategory(0)} */}
                </li>
                {directoryPath.map((item, index) => (
                  <li key={index + 1} style={{ border: '1px solid grey' }}>
                    <CategorySelection parentId={item.cat_id} />
                    {/* {() => createCategory(item.cat_id)} */}
                  </li>
                ))}
              </UlCatalog>
            )}
          </div>
        </div>

        <NavContainer>
          <NavLinkStyle to="/">
            {/* Home */}
            <sup>{lang[languages].NavLinkBar_home.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/catalog">
            <sup>{lang[languages].NavLinkBar_catalog.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/orders">
            <sup>{lang[languages].NavLinkBar_orders.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/help">
            <sup>{lang[languages].NavLinkBar_help.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/about_us">
            <sup>{lang[languages].NavLinkBar_aboutUs.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          <NavLinkStyle to="/delivery">
            <sup>{lang[languages].NavLinkBar_delivery.toUpperCase()}</sup>
          </NavLinkStyle>
          <Img src={electricity} alt="electricity symbol" />
          {/* Message */}
          <Span onClick={onOpenModal}>
            <sup>{lang[languages].NavLinkBar_message.toUpperCase()}</sup>
          </Span>
        </NavContainer>
      </DivNav>
      {isModalShown && <MessageModule onClose={onCloseModal} />}
    </>
  );
}

export default NavLinkBar;