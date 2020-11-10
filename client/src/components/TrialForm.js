import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import './../index.css';
import axios from 'axios';

const TrialForm = () => {
    const [state, setstate] = useState([]);
    const [date, setdate] = useState([]);
    const [time, setTime] = useState([]);
    const { register, handleSubmit, errors, getValues } = useForm({
        validateCriteriaMode: "all",
        mode: "onChange"
    });

    const selectCourse = (course_name) => {
        let data = [];
        let time_data = [];
        for (let [key, value] of Object.entries(state)) {
            if (value.course_name === course_name) {
                for (let index = 0; index < value.slots.length; index++) {
                    let no = new Date(parseInt(value.slots[index].slot));
                    let _date = no.toDateString();
                    let _date_no = no.getDate();
                    time_data.push([_date_no, no.toLocaleString('en-US', { hour: 'numeric', hour12: true })]);
                    data.push(_date);
                }
            }
        }
        let unique = [...new Set(data)];
        setdate(unique)
        setTime(time_data)
    }

    const selectDate = (date) => {
        let time_data = [];
        let expresion = /\d{2} /;
        let _date = date.match(expresion);
        let new_Time = time.map(ele => {
            if (ele[0] == _date[0]) {
                time_data.push(ele[1])
            }
        })
        let unique = [...new Set(time_data)]
        setTime(unique)
    }

    const onSubmit = (data, e) => {
        e.target.reset();
        axios.post('http://localhost:5000/api/users/', data)
            .then(res => {
                if(res.data){
                    alert("Booked Successful");
                }else{
                    alert("There was an error in booking your class");
                }
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get('https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec')
            .then(res => setstate(res.data));
    }, [])

    return (
        <>
            <h3 className="form-head" id="trailform">
                Book a FREE Trial Coding Session
            </h3>
            <div className="container">
                <div className="col-lg-7 contact-form__wrapper p-5 ">
                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form form-validate" >
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label className="required-field">Parent Name</label>
                                    <input
                                        ref={register({
                                            required: "Parent Name is required", minLength: {
                                                value: 3,
                                                message: "Name should be more than 3 character"
                                            }
                                        })} type="text" className="form-control" name="parentName" />
                                    <ErrorMessage errors={errors} name="parentName">
                                        {
                                            ({ messages }) =>
                                                messages &&
                                                Object.defineProperties(messages).map(([type, message]) => (
                                                    <p className="help-block text-danger" key={type}>{message}</p>
                                                ))
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label className="required-field">Parent Contact Number</label>
                                    <input
                                        ref={register({
                                            required: "Contact Number required", minLength: {
                                                value: 10,
                                                message: "Contact number is incorrect"
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: "Contact number is incorrect"
                                            },
                                            type: Number
                                        })} type="number" className="form-control" name="parentContactNo" />
                                    <ErrorMessage errors={errors} name="parentContactNo">
                                        {
                                            ({ messages }) =>
                                                messages &&
                                                Object.defineProperties(messages).map(([type, message]) => (
                                                    <p className="help-block text-danger" key={type}>{message}</p>
                                                ))
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label className="required-field">Parnet Email Id</label>
                                    <input ref={register({
                                        required: "Email Id is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Enter a valid email address"
                                        }
                                    })} type="email" className="form-control" name="parentEmail" id="parentEmail" />
                                    <ErrorMessage errors={errors} name="parentEmail">
                                        {
                                            ({ messages }) =>
                                                messages &&
                                                Object.defineProperties(messages).map(([type, message]) => (
                                                    <p className="help-block text-danger" key={type}>{message}</p>
                                                ))
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label className="required-field">Child name</label>
                                    <input ref={register({
                                        required: "Children name is required", minLength: {
                                            value: 3,
                                            message: "Name should atleast 3 character long"
                                        }
                                    })} type="text" className="form-control" name="childName" />
                                    <ErrorMessage errors={errors} name="childName">
                                        {
                                            ({ messages }) =>
                                                messages &&
                                                Object.defineProperties(messages).map(([type, message]) => (
                                                    <p className="help-block text-danger" key={type}>{message}</p>
                                                ))
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label className="required-field">Child Age</label>
                                    <input ref={register({
                                        required: "Age required",
                                        type: Number
                                    })} type="number" className="form-control" name="childAge" />
                                    <ErrorMessage errors={errors} name="childAge">
                                        {
                                            ({ messages }) =>
                                                messages &&
                                                Object.defineProperties(messages).map(([type, message]) => (
                                                    <p className="help-block text-danger" key={type}>{message}</p>
                                                ))
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label>Course Name</label>
                                    <select type="select" name="courseName"
                                        className="form-control"
                                        onChange={() => selectCourse(getValues()["courseName"])}
                                        ref={register()}>
                                        <option>Select course...</option>
                                        {state.map(ele => {
                                            return <option key={ele.course_id} name={ele.course_name}>{ele.course_name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label>Select Date</label>
                                    <select type="select" name="date"
                                        className="form-control"
                                        onChange={() => selectDate(getValues()["date"])}
                                        ref={register({
                                            required: "Select date"
                                        })}>
                                        <option>Select date...</option>
                                        {date.map((ele, index) => {
                                            return <option key={index} name={ele}>{ele}</option>
                                        })}
                                    </select>
                                    <ErrorMessage errors={errors} name="date">
                                        {
                                            ({ messages }) =>
                                                messages &&
                                                Object.defineProperties(messages).map(([type, message]) => (
                                                    <p className="help-block text-danger" key={type}>{message}</p>
                                                ))
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="form-group">
                                    <label>Select time</label>
                                    <select type="select" name="time"
                                        className="form-control"
                                        ref={register({
                                            required: "Select time"
                                        })}>
                                        <option>Select time...</option>
                                        {time.map((ele, index) => {
                                            return <option key={index} name={ele}>{ele}</option>
                                        })}
                                    </select>
                                    <ErrorMessage errors={errors} name="time">
                                        {
                                            ({ messages }) =>
                                                messages &&
                                                Object.defineProperties(messages).map(([type, message]) => (
                                                    <p className="help-block text-danger" key={type}>{message}</p>
                                                ))
                                        }
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div className="col-sm-12 mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <h3 className="form-head">
        Book a FREE Trial Coding Session
        </h3>
            <form className="form-data">
                <div className="form-feild">
                    <label className="form-lable">Parent Name</label>
                    <input className="form-input" type="text" />
                </div>
                <div className="form-feild">
                    <label className="form-lable">Parent Contact Number</label>
                    <input className="form-input" type="text" />
                </div>
                <div className="form-feild">
                    <label className="form-lable">Parent Email Id</label>
                    <input className="form-input" type="text" />
                </div>
                <div className="form-feild">
                    <label className="form-lable">Child Name</label>
                    <input className="form-input" type="text" />
                </div>
                <div className="form-feild">
                    <label className="form-lable">Child Age</label>
                    <input className="form-input" type="text" />
                </div>
                <div className="form-feild">
                    <label className="form-lable">Course Name</label>
                    <input className="form-input" type="text" />
                </div>
                <div className="form-feild mt-2">                   
                <button>Sumbit</button>
                </div>
            </form> */}
        </>
    );

}

export default TrialForm;