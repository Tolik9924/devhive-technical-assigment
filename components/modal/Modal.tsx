import { Button } from "@/ui-components/Button";
import styles from "./modal.module.css";

// Modal component for editing forms and displaying information.

export const Modal = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children,
}: {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}) => {
  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalOverlay} onClick={onClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {hasCloseBtn && (
              <div className={styles.modalCloseButton}>
                <Button onClick={handleCloseModal} size="xs">
                  Close
                </Button>
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
};
