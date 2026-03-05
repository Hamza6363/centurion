import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowRight from '../assets/icons/arrow-right.svg'

export default function GetInTouchForm() {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            subject: Yup.string().required("Subject is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-[16px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full name"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                        className="w-full bg-transparent border border-[#3A3A40] rounded-md px-4 h-[45px] lg:h-[52px] py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.fullName}</p>
                    )}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="w-full bg-transparent border border-[#3A3A40] rounded-md px-4 h-[45px] lg:h-[52px] py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                    )}
                </div>
            </div>
            <div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                    className="w-full bg-transparent border border-[#3A3A40] rounded-md px-4 h-[45px] lg:h-[52px] py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.subject}</p>
                )}
            </div>
            <div className="lg:pb-[15px]">
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    className="w-full bg-transparent border border-[#3A3A40] rounded-md px-4 h-[120px] py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
                />
                {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.message}</p>
                )}
            </div>
            <button
                type="submit"
                className="btn btn-primary w-full"
            >
                Submit <img src={ArrowRight} alt="" />
            </button>

        </form>
    );
}