import React, {useContext, useEffect} from 'react';
import './App.css';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthenticatedHeader from "./components/authentication/AuthenticatedHeader";
import User from "./components/user/User";
import UserAnswers from "./components/question/UserAnswers";
import UserEdit from "./components/user/UserEdit";
import UserDelete from "./components/user/UserDelete";
import UnauthenticatedHeader from "./components/authentication/UnauthenticatedHeader";
import UserQuestions from "./components/question/UserQuestions";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";

function App() {
    const {store} = useContext(Context);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])

    return (
        <div>
            <BrowserRouter>
                {store.isAuth ? <AuthenticatedHeader/> : <UnauthenticatedHeader/>}
                <Routes>
                    {store.isAuth ? (
                        <Route path="/" element={<UserQuestions/>}/>
                    ) : (
                        <Route path="/" element={<Login/>}/>
                    )}
                    <Route path="/" element={<Login/>}/>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/register" element={<Register/>}/>
                    <Route path="/users/:id" element={<User/>}/>
                    <Route path="/users/:id/questions" element={<UserQuestions/>}/>
                    <Route path="/users/:id/answers" element={<UserAnswers/>}/>
                    <Route path="/users/:id/edit" element={<UserEdit/>}/>
                    <Route path="/users/:id/delete" element={<UserDelete/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default observer(App);
