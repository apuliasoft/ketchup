import { ItemsDisplayMode, KupListEventPayload } from '../../components';
import { FComponent, KupComponentSizing } from '../../types/GenericTypes';

export interface FAutocompleteProps extends FComponent {
    displayedValue?: string;
    value?: string;
    alert?: string;
    allowIncosistentValues?: boolean;
    customStyle?: string;
    data?: Object;
    disabled?: boolean;
    displayMode?: ItemsDisplayMode;
    error?: string;
    icon?: string;
    initialValue?: string;
    isClearable?: boolean;
    inputDelay?: number;
    label?: string;
    leadingLabel?: boolean;
    minimumChars?: number;
    readOnly?: boolean;
    selectMode?: ItemsDisplayMode;
    serverHandledFilter?: boolean;
    showDropDownIcon?: boolean;
    sizing?: KupComponentSizing;
    trailingIcon?: boolean;
    fullHeight?: boolean;
    fullWidth?: boolean;
    onKupBlur?: () => void;
    onKupClick?: () => void;
    onKupChange?(e: UIEvent): void;
    onKupItemClick?(e: CustomEvent<KupListEventPayload>): void;
    onKupFocus?: () => void;
    onKupInput?: () => void;
    onKupIconClick?: () => void;
    inputTimeout?: number;
    textfieldEl?: HTMLInputElement | HTMLTextAreaElement;
    listEl?: HTMLKupListElement;
}
