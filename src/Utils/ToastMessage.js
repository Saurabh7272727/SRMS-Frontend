import React from 'react';
import { toast } from 'react-toastify';



export const SucessToast = (msg) => {
    toast.success(msg, {
        position: "bottom-right"
    })
}

export const ErrorToast = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}