import React from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import SVGIcon from '../SVGIcon';
import closeSVG from './close_button.svg';
import checkSvg from './green-check-icon.svg';
import styles from './Modal.css';

const Modal 
= ({
  title,
  titleClass,
  text,
  actionButtons,
  modalDismiss,
  children,
  open,
  size,
  textClass,
  showCloseButton,
  showTextIcon,
  accessButtons,
  greenButton,
  errorButton,
  success,
}) => (
  createPortal(
    <div
      className={cn(
        !open ? styles.hide : styles.modalContainer,
      )}
      onClick={modalDismiss}
      onKeyDown={modalDismiss}
      role="presentation"

    >
      <div
        className={cn(
          styles.modalContent,
          styles[size],
        )}
        onClick={e => e.stopPropagation()}
        onKeyDown={e => e.stopPropagation()}
        role="presentation"
      >
        <div className={cn(
          titleClass ? styles[titleClass] : styles.modalTitle,
        )}
        >
          <span>
            {title}
          </span>
        </div>
        <div className={styles.modalBody}>
          <>
            {children}
          </>
          <div
            className={cn(
              textClass ? styles[textClass] : null,
            )}
          >
            {showTextIcon ? (
              <div
                className={cn(
                  styles.svgTextIcon,
                )}
              >
                <SVGIcon
                  icon={success ? checkSvg : closeSVG}
                  className={cn(
                    styles.icon,
                    styles.auth,
                    success ? styles.authSuccess : styles.authFail,
                  )}
                  onClick={modalDismiss}
                />
              </div>
            ) : null}
            <span>
              {text}
            </span>
          </div>
        </div>
        <div className={cn(
          greenButton ? styles.greenButton : null,
          accessButtons ? styles.accessButtons : styles.modalButtons,
          errorButton ? styles.errorButton : null,
        )}
        >
          {actionButtons}
        </div>
        {showCloseButton ? (
          <div className={styles.svgIcon}>
            <SVGIcon
              icon={closeSVG}
              className={styles.icon}
              onClick={modalDismiss}
            />
          </div>
        ) : null}
      </div>

    </div>,
    document.getElementById('modal'),
  )
);

export default Modal;
