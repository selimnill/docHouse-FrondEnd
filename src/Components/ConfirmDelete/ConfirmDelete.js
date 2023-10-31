import React from 'react';

const ConfirmDelete = ({title, message, closeModal, deleteDoctor, deleteDoctorButton}) => {
    return (
        <div>
            <input type="checkbox" id="deleteModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => deleteDoctorButton(deleteDoctor)} htmlFor="deleteModal" className="btn bg-red-700 text-white">Delete</label>
                        <label onClick={closeModal} htmlFor="deleteModal" className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDelete;