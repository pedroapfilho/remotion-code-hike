// ❌ Wrong: Custom modals often leak focus
function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 ...">
      <div className="...">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
