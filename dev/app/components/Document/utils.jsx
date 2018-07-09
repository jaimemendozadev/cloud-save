import React from 'react';
import LinkIcon from './icons/link.svg';
import DocIcon from './icons/doc.svg';
import PDFIcon from './icons/pdf.svg';
import GIFIcon from './icons/gif.svg';
import JPEGIcon from './icons/jpg.svg';
import PNGIcon from './icons/png.svg';
import SVGIcon from './icons/svg.svg';

export const getImageIcon = file_type => {

    switch (file_type) {
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            return <DocIcon alt='designed by Freepik from Flaticon' width={25} height={25} />

        case 'application/msword':
            return <DocIcon alt='designed by Freepik from Flaticon' width={25} height={25} />

        case 'application/pdf':
            return <PDFIcon alt='designed by Freepik from Flaticon' width={25} height={25} />

        case 'image/gif':
            return <GIFIcon alt='designed by Freepik from Flaticon' width={25} height={25} />

        case 'image/jpeg':
            return <JPEGIcon alt='designed by Freepik from Flaticon' width={25} height={25} />

        case 'image/png':
            return <PNGIcon alt='designed by Freepik from Flaticon' width={25} height={25} />

        case 'image/svg+xml':
            return <SVGIcon alt='designed by Freepik from Flaticon' width={25} height={25} />

        default:
            return <LinkIcon width={25} height={25} />
    }
}