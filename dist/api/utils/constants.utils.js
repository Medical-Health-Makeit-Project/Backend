"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALID_DOCTOR_DOMAIN = exports.VALID_PRODUCT_FIELDS = exports.VALID_USER_FIELDS = exports.USERS_FOLDER_CLOUDINARY = exports.PRODUCTS_FOLDER_CLOUDINARY = exports.DOCTORS_FOLDER_CLOUDINARY = exports.PRESET_CLOUDINARY = exports.OBJ_FORM_DATA = void 0;
exports.OBJ_FORM_DATA = ['qualifications', 'skills', 'headquarter', 'memberships'];
exports.PRESET_CLOUDINARY = 'MEBID';
exports.DOCTORS_FOLDER_CLOUDINARY = 'doctors';
exports.PRODUCTS_FOLDER_CLOUDINARY = 'products';
exports.USERS_FOLDER_CLOUDINARY = 'users';
exports.VALID_USER_FIELDS = ['avatar', 'email', 'phone', 'password'];
exports.VALID_PRODUCT_FIELDS = ['stock', 'price', 'discount', 'product', 'label', 'dose', 'description', 'image'];
exports.VALID_DOCTOR_DOMAIN = /^[a-zA-Z0-9._%+-]+@drmebid\.com$/;