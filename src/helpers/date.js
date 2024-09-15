import React from 'react';

export default function () {
    const CurrentYear = new Date().getFullYear()
    const PublishYear = 2024
    return(
    <div>
       {PublishYear} - {CurrentYear}
    </div>
);
}