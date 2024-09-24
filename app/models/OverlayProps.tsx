export interface OverlayProps {
    title: string;
    icon?: string;
    name: string;
    profilePic: string;
    phone: string;
    email: string;
    onClose?: () => void;
    onClick?: () => void;
}