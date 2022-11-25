import React from 'react';

const Loading = () => {
    return (
        <div class="flex justify-center items-center">
            <div class="spinner-border animate-spin inline-block w-16 h-16 border-4 border-b-blue-800 rounded-full" role="status">
                <span class="visually-hidden"></span>
            </div>
        </div>
    );
};

export default Loading;