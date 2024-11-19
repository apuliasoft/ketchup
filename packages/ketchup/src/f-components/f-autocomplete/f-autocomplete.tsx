import { FunctionalComponent, h } from '@stencil/core';
import { FAutocompleteProps } from './f-autocomplete-declarations';
import { FTextField } from '../f-text-field/f-text-field';
import { KupThemeIconValues } from '../../managers/kup-theme/kup-theme-declarations';

export const FAutocomplete: FunctionalComponent<FAutocompleteProps> = (
    props: FAutocompleteProps
) => {
    return (
        <FTextField
            {...props}
            icon={props.showDropDownIcon ? KupThemeIconValues.DROPDOWN : null}
            trailingIcon={true}
            {...props.data['kup-text-field']}
            disabled={props.disabled}
            fullHeight={props.fullHeight}
            fullWidth={props.fullWidth}
            value={props.displayedValue}
            onBlur={props.onKupBlur}
            onClick={props.onKupClick}
            onChange={(e: UIEvent & { target: HTMLInputElement }) =>
                props.onKupChange(e)
            }
            onFocus={props.onKupFocus}
            onInput={() => {
                console.log('oninput');
                window.clearTimeout(props.inputTimeout);
                props.inputTimeout = window.setTimeout(
                    () => props.onKupInput(),
                    props.inputDelay
                );
            }}
            onIconClick={props.onKupIconClick}
        ></FTextField>
    );
};
