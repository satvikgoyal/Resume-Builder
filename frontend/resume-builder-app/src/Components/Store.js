import {createStore} from 'redux';
import { combineReducers } from 'redux';
// import ContactReducer from '../redux/ContactInputRedux/ContactReducer';
import ContactReducer from '../redux/ContactInputRedux/ContactReducer';
import SkillsReducer from '../redux/SkillsInputRedux/SkillsReducer';
import AwardReducer from '../redux/AwardInputRedux/AwardReducer';
import InfoReducer from '../redux/PersonalInfoInputRedux/InfoReducer';
import ProfileReducer from '../redux/PerosnalProfileInputReducer/ProfileReducer';
import WorkReducer from '../redux/WorkInputReducer/WorkReducer';
import EducationReducer from '../redux/WorkInputReducer/EducationReducer';
import ProjectReducer from '../redux/WorkInputReducer/ProjectReducer';
import EditButtonReducer from '../redux/EditButtonRedux/EditButtonReducer';
import AddSectionReducer from '../redux/AddSection/AddSectionReducer'
import LogoutReducer from '../redux/LogoutRedux/LogoutReducer';
import DatabaseReducer from '../redux/DataBaseRedux/DatabaseReducer';

const rootReducer = combineReducers({
    ContactReducer,
    SkillsReducer,
    AwardReducer,
    InfoReducer,
    ProfileReducer,
    WorkReducer,
    EducationReducer,
    ProjectReducer,
    EditButtonReducer,
    AddSectionReducer,
    LogoutReducer,
    DatabaseReducer
}) 

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;