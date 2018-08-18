/*function confirm_alert(title,text_message,type,function_name,confirmButtonText,cancelButtonText) {
 title = title || "بعد از حذف دیگر به این مورد دسترسی نخواهید داشت!";
 text_message = text_message || "بعد از حذف دیگر به این مورد دسترسی نخواهید داشت!";
 type = type || "warning";
 confirmButtonText = confirmButtonText || "بله، حذف شود!";
 cancelButtonText = cancelButtonText || "خیر، منصرف شدم!";
 swal({
 title: title,
 text: text_message,
 type: type,
 showCancelButton: true,
 confirmButtonColor: "#EF5350",
 confirmButtonText: confirmButtonText,
 cancelButtonText: cancelButtonText,
 closeOnConfirm: false,
 closeOnCancel: false
 },
 function (isConfirm) {
 if (isConfirm) {
 deleteWorkerUser(worker_id);
 swal({
 title: "Deleted!",
 text: "Your imaginary file has been deleted.",
 confirmButtonColor: "#66BB6A",
 type: "success"
 });
 }
 else {
 swal({
 title: "Cancelled",
 text: "Your imaginary file is safe :)",
 confirmButtonColor: "#2196F3",
 type: "error"
 });
 }
 });
 }*/