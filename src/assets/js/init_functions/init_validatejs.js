//---------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
function checkUsername(str) {
    //console.log(str);
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (str == null) {
        error = "^<strong>وارد کردن نام کاربری الزامی است.</strong>";
    } else if (illegalChars.test(str)) {
        error = "^<strong>نام کاربری فقط می تواند ترکیبی از اعداد و حروف انگلیسی باشد.</strong>";
    } else if (str.length < 5) {
        error = "^<strong>نام کابری باید حداقل 5 کاراکتر باشد.</strong>";
    } else if (str.length > 20) {
        error = "^<strong>نام کابری باید حداکثر 20 کاراکتر باشد.</strong>";
    } else {
        error = null;
    }
    return error;
}

function checkCodeMelli(code) {
    if (!/^\d{10}$/.test(code)
        || code == '0000000000'
        || code == '1111111111'
        || code == '2222222222'
        || code == '3333333333'
        || code == '4444444444'
        || code == '5555555555'
        || code == '6666666666'
        || code == '7777777777'
        || code == '8888888888'
        || code == '9999999999')
        return false;
    var check = parseInt(code[9]);
    var sum = 0;
    var i;
    for (i = 0; i < 9; ++i) {
        sum += parseInt(code[i]) * (10 - i);
    }
    sum %= 11;
    return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
}

function checkMobileNumber(mobile_number) {
    if (/^09[0-9]{9}$/.test(mobile_number))
        return true;
    return false;

}

function check_national_id(code) {
    var L = code.length;

    if (L < 11 || parseInt(code, 10) == 0) return false;

    if (parseInt(code.substr(3, 6), 10) == 0) return false;
    var c = parseInt(code.substr(10, 1), 10);
    var d = parseInt(code.substr(9, 1), 10) + 2;
    var z = new Array(29, 27, 23, 19, 17);
    var s = 0;
    for (var i = 0; i < 10; i++)
        s += (d + parseInt(code.substr(i, 1), 10)) * z[i % 5];
    s = s % 11;
    if (s == 10) s = 0;
    //console.log(s,c);
    return (c == s);
}

validate.validators.username = function (value, options, key, attributes) {
    //console.log('asdasdasdasd');
    var res = checkUsername(value);
    if (res == "") {
        return null;
    }
    else {
        if (options.message) {
            return options.message;
        }
        else {
            return res;
        }
    }
};

validate.validators.only_english = function (value, options, key, attributes) {
    if (value != null) {
        if (/[^A-Za-z]/g.test(value)) {
            return options.message;
        } else {
            return null;
        }
    }
};

validate.validators.only_persian = function (value, options, key, attributes) {
    if (value != null) {
        if (/@"^([\u0600-\u06FF]+\s?)+$"/g.test(value)) {
            return options.message;
        } else {
            return null;
        }
    }
};

validate.validators.only_numbers = function (value, options, key, attributes) {
    if (value != null) {
        if (/[^0-9]/g.test(value)) {
            return options.message;
        } else {
            return null;
        }
    }
};

validate.validators.national_id = function (value, options, key, attributes) {
    if (value != null) {
        //console.log('sss:',check_national_id(value),value);
        if (check_national_id(value)) {
            return null;
        }
        return options.message;
    }
};

validate.validators.codeMelli = function (value, options, key, attributes) {
    if (value != null) {
        //console.log('sss:',check_national_id(value),value);
        if (checkCodeMelli(value)) {
            return null;
        }
        return options.message;
    }
};

validate.validators.iranMobileNumber = function (value, options, key, attributes) {
    if (value != null) {
        //console.log('sss:',check_national_id(value),value);
        if (checkMobileNumber(value)) {
            return null;
        }
        return options.message;
    }
};

validate.validators.require_if_presence = function (value, options, key, attributes) {
    other_attribute_presence = attributes[options.other_attribute_name] == null;
    if (other_attribute_presence) {
        return null;
    }
    else {
        if (value == null) {
            return options.message;
        }
        else {
            return null;
        }
    }
};

validate.validators.require_if = function (value, options, key, attributes) {
    var make = false;
    options.other_attribute_operand || '==';
    target_field_value = attributes[options.other_attribute_name] == null ? 0 : attributes[options.other_attribute_name];
    switch (options.other_attribute_operand) {
        case '>':
            make = target_field_value > options.other_attribute_value;
            break;
        case '<':
            make = target_field_value < options.other_attribute_value;
            break;
        case '>=':
            make = target_field_value >= options.other_attribute_value;
            break;
        case '<=':
            make = target_field_value <= options.other_attribute_value;
            break;
        case '<>':
        case '!=':
            make = target_field_value != options.other_attribute_value;
            break;
        case '!==':
            make = target_field_value !== options.other_attribute_value;
            break;
        case '=':
        case '==':
        default:
            make = target_field_value == options.other_attribute_value;
            break;
    }
    if (make) {
        if (value == null) {
            return options.message;
        }
        if (options.exclusion) {
            var result = true;
            options.exclusion.forEach(function (item) {
                //console.log(value, item, key);
                if (value == item) {
                    result = false;
                }
            });
            if (!result) {
                if (options.exclusion_message) {
                    return options.exclusion_message;
                }
                else {
                    return options.message;
                }
            }
            return null;
        }
        if (options.inclusion) {
            var result = true;
            options.inclusion.forEach(function (item) {
                //console.log(value, item, key);
                if (value != item) {
                    result = false;
                }
            });
            if (!result) {
                if (options.inclusion_message) {
                    return options.inclusion_message;
                }
                else {
                    return options.message;
                }
            }
            return null;
        }
        return null;
    }
    return null;
};

//---------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
// Before using it we must add the parse and format functions
// Here is a sample implementation using moment.js
validate.extend(validate.validators.datetime, {
    // The value is guaranteed not to be null or undefined but otherwise it
    // could be anything.
    parse: function (value, options) {
        return +moment.utc(value);
    },
    // Input is a unix timestamp
    format: function (value, options) {
        var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
        return moment.utc(value).format(format);
    }
});

//init validator js
function init_validatejs(form, constraints, function_name, selector_loader_area, console_log) {
    var console_log = console_log || false;
    // Hook up the form so we can prevent it from being posted
    selector_loader_area = selector_loader_area || '#' + form.id;
    var submits = form.querySelectorAll("button[type=submit]");
    for (var i = 0; i < submits.length; ++i) {
        submits.item(i).addEventListener("click", function (ev) {
            ev.preventDefault();
            var submit_value = $(this).val();
            handleFormSubmit(form, constraints, function_name, submit_value, selector_loader_area, console_log);
        });
    }

    // Hook up the inputs to validate on the fly
    var inputs = form.querySelectorAll("input, textarea, select");
    for (var i = 0; i < inputs.length; ++i) {
        if (inputs.item(i).type == 'select-one') {
            //console.log(inputs.item(i).type);

            $('#' + inputs.item(i).name).on('select2:unselect', function (e) {
                var errors = validate(form, constraints) || {};
                showErrors(form, errors || {});
            });

            $('#' + inputs.item(i).name).on('select2:select', function (e) {
                var errors = validate(form, constraints) || {};
                showErrors(form, errors || {});
            });

        }
        inputs.item(i).addEventListener("focusout", function (ev) {
            var errors = validate(form, constraints) || {};
            showErrorsForInput(this, errors[this.name]);
        });
    }
}

function handleFormSubmit(form, constraints, function_name, submit_value, selector_loader_area, console_log) {
    // validate the form aainst the constraints
    var errors = validate(form, constraints);
    if (console_log) {
        console.log(errors);
    }
    // then we update the form to reflect the results
    showErrors(form, errors || {});
    if (!errors) {
        $(selector_loader_area).append(generate_loader_html('لطفا منتظر بمانید...'));
        function_name(form, submit_value);
    } else {
    }
}

// Updates the inputs with the validation errors
function showErrors(form, errors) {
    // We loop through all the inputs and show the errors for that input
    _.each(form.querySelectorAll("input[name], select[name], textarea[name]"), function (input) {
        // Since the errors can be null if no errors were found we need to handle
        // that
        showErrorsForInput(input, errors && errors[input.name]);
    });
}

// Shows the errors for a specific input
function showErrorsForInput(input, errors) {
    if (input.type == 'hidden')
        return;
    // This is the root of the input
    var formGroup = closestParent(input.parentNode, "form-group")
        // Find where the error messages will be insert into
        , messages = formGroup.querySelector(".messages");
    // First we remove any old messages and resets the classes
    resetFormGroup(formGroup);
    // If we have errors
    if (errors) {
        // we first mark the group has having errors
        formGroup.classList.add("has-error");
        // then we append all the errors
        _.each(errors, function (error) {
            addError(messages, error);
        });
    } else {
        // otherwise we simply mark it as success
        formGroup.classList.add("has-success");
    }
}

// Recusively finds the closest parent that has the specified class
function closestParent(child, className) {
    if (!child || child == document) {
        return null;
    }
    if (child.classList.contains(className)) {
        return child;
    } else {
        return closestParent(child.parentNode, className);
    }
}

function resetFormGroup(formGroup) {
    // Remove the success and error classes
    formGroup.classList.remove("has-error");
    formGroup.classList.remove("has-success");
    // and remove any old messages
    _.each(formGroup.querySelectorAll(".help-block.error"), function (el) {
        el.parentNode.removeChild(el);
    });
}

// Adds the specified error with the following markup
// <p class="help-block error">[message]</p>
function addError(messages, error) {
    var block = document.createElement("p");
    block.classList.add("help-block");
    block.classList.add("error");
    block.innerHTML = error;
    messages.appendChild(block);
}

function showMessages(messages, form_message_box_id, type, form_element) {
    $(document).off("click", '#' + form_message_box_id);
    $(document).on('click', '#' + form_message_box_id, function () {
        formMessagesArea.classList.remove("message_show");
    });
    var formMessagesArea = document.querySelector('#' + form_message_box_id);
    formMessagesArea.innerHTML = "";
    formMessagesArea.classList.remove("message_show");
    formMessagesArea.classList.remove("message_info");
    formMessagesArea.classList.remove("message_success");
    formMessagesArea.classList.remove("message_error");
    formMessagesArea.classList.add("message_show");
    if (type == 'info') {
        formMessagesArea.classList.add("message_info");
    }

    if (type == 'success') {
        formMessagesArea.classList.add("message_success");
    }

    if (type == 'error') {
        formMessagesArea.classList.add("message_error");
    }

    if (type == 'warning') {
        formMessagesArea.classList.add("message_warning");
    }

    var ul = document.createElement("ul");
    //console.log(messages);
    $.each(messages, function (index, value) {
        //console.log( value.title );
        //console.log( value.items );
        var title_li = document.createElement("li");
        var title_items_ul = document.createElement("ul");
        $.each(value.items, function (k, v) {
            //console.log(v);
            var title_items_li = document.createElement("li");
            title_items_li.innerHTML = '<h6>' + v + '</h6>';
            title_items_ul.appendChild(title_items_li);
        });
        title_li.innerHTML = '<h5>' + value.title + '</h5>';
        title_li.append(title_items_ul);
        ul.appendChild(title_li);
    });
    formMessagesArea.append(ul);

    var close_btn = document.createElement("button");
    close_btn.classList.add("close_message_btn");
    close_btn.classList.add("fa");
    close_btn.classList.add("fa-times");
    formMessagesArea.append(close_btn);
    document.getElementById(form_message_box_id).scrollIntoView();
}
