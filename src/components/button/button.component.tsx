import React from 'react';
import classes from './button.module.scss';
import { IButtonProps } from '../../types';

export const Button: React.FC<IButtonProps> = props => {
  const {
    label,
    variant = 'primary',
    size = 'md',
    font = 'montserrat',
    icon,
    ...otherProps
  } = props;

  const isLabel = label && label?.length > 0;
  const variantClassName = classes[`button_${variant}`];
  const sizeClassName = classes[`button_${size}`];

  return (
    <div className={classes.buttonWrapper} id='10'>
      <button
        {...otherProps}
        className={`${variantClassName} ${sizeClassName}`}
      >
        {font === 'montserrat' && (
          <>
            <span>{isLabel ? label : props.children}</span>
            {icon && <span className={classes.icon}>{icon}</span>}
          </>
        )}
        {font === 'nunito' && <span>{isLabel ? label : props.children}</span>}
      </button>
    </div>
  );
};

// import React from 'react';
// import classes from './button.module.scss';
// import { IButtonProps } from '../../types';

// export const Button: React.FC<IButtonProps> = props => {
//   const {
//     label,
//     variant = 'primary',
//     size = 'md',
//     font = 'montserrat',
//     icon,
//     isLink = false,
//     ...otherProps
//   } = props;

//   const isLabel = label && label?.length > 0;
//   const variantClassName = classes[`button_${variant}`];
//   const sizeClassName = classes[`button_${size}`];

//   if (isLink) {
//     const { href, ...restLinkProps } = otherProps as { href?: string }; // Explicitly define type
//     return (
//       <div className={classes.buttonWrapper} id='10'>
//         <a
//           href={href || '#'} // Use '#' if href is not provided
//           className={`${variantClassName} ${sizeClassName} ${classes.button}`}
//           {...restLinkProps}  
//         >
//           {font === 'montserrat' && (
//             <>
//               {icon && <span className={classes.icon}>{icon}</span>}
//               <span>{isLabel ? label : props.children}</span>
//             </>
//           )}
//           {font === 'nunito' && <span>{isLabel ? label : props.children}</span>}
//         </a>
//       </div>
//     );
//   }

//   return (
//     <div className={classes.buttonWrapper} id='10'>
//       <button
//         className={`${variantClassName} ${sizeClassName} ${classes.button}`}
//         {...otherProps}
//       >
//         {font === 'montserrat' && (
//           <>
//             {icon && <span className={classes.icon}>{icon}</span>}
//             <span>{isLabel ? label : props.children}</span>
//           </>
//         )}
//         {font === 'nunito' && <span>{isLabel ? label : props.children}</span>}
//       </button>
//     </div>
//   );
// };
