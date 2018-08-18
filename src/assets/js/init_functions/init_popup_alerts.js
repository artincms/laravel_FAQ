function yesNoAlert(title, text, type, confirm_button_text, cancel_button_text, func, function_params,unconfirm_func,unconfirm_func_params) {
    unconfirm_func = unconfirm_func || false ;
    unconfirm_func_params = unconfirm_func_params || {} ;
    swal({
            title: title,
            text: text,
            type: type,
            showCancelButton: true,
            confirmButtonColor: "#EF5350",
            confirmButtonText: confirm_button_text,
            cancelButtonText: cancel_button_text,
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function (isConfirm) {
            if (isConfirm) {
//                    swal({
//                        title: "Deleted!",
//                        text: "Your imaginary file has been deleted.",
//                        confirmButtonColor: "#66BB6A",
//                        type: "success"
//                    });
                func(function_params);
                swal.close();
            }
            else {
                if (unconfirm_func)
                {
                    unconfirm_func(unconfirm_func_params);
                }
                swal.close();
//                    swal({
//                        title: "Cancelled",
//                        text: "Your imaginary file is safe :)",
//                        confirmButtonColor: "#2196F3",
//                        type: "error"
//                    });
            }
        });
}