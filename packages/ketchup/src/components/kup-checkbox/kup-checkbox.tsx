import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { FCheckbox } from '../../f-components/f-checkbox/f-checkbox';
import { FCheckboxProps } from '../../f-components/f-checkbox/f-checkbox-declarations';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupCheckboxProps,
    KupCheckboxEventPayload,
} from './kup-checkbox-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';

@Component({
    tag: 'kup-checkbox',
    styleUrl: 'kup-checkbox.scss',
    shadow: true,
})
export class KupCheckbox {
    /**
     * References the root HTML element of the component (<kup-checkbox>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value of the component.
     * @default ""
     */
    @State() value: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Set alert message
     * @default '''
     */
    @Prop() alert: string = '';
    /**
     * Defaults at false. When set to true, the component will be set to 'checked'.
     * @default false
     */
    @Prop({ mutable: true }) checked: boolean = false;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * Set error message
     * @default '''
     */
    @Prop() error: string = '';
    /**
     * When set to true, the component will be set to 'indeterminate'.
     * @default false
     */
    @Prop({ mutable: true }) indeterminate: boolean = false;
    /**
     * When specified, its content will be shown as a label.
     * @default null
     */
    @Prop() label: string = null;
    /**
     * When set to true, the label will be on the left of the component.
     * @default false
     */
    @Prop() leadingLabel: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the input element loses focus.
     */
    @Event({
        eventName: 'kup-checkbox-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupCheckboxEventPayload>;
    /**
     * Triggered when the input element's value changes.
     */
    @Event({
        eventName: 'kup-checkbox-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupCheckboxEventPayload>;
    /**
     * Triggered when the input element gets focused.
     */
    @Event({
        eventName: 'kup-checkbox-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupCheckboxEventPayload>;

    onKupBlur() {
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            checked: this.checked == true ? true : false,
            value: this.value,
        });
    }

    onKupChange() {
        if (this.indeterminate) {
            this.checked = true;
            this.indeterminate = false;
            this.value = 'indeterminate';
        } else if (this.checked) {
            this.checked = false;
            this.value = 'off';
        } else {
            this.checked = true;
            this.value = 'on';
        }
        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            checked: this.checked,
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            checked: this.checked == true ? true : false,
            value: this.value,
        });
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupCheckboxProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupCheckboxProps, props);
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        if (this.checked) {
            this.value = 'on';
        } else {
            this.value = 'off';
        }
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const props: FCheckboxProps = {
            checked: this.checked,
            danger: this.rootElement.classList.contains('kup-danger')
                ? true
                : false,
            disabled: this.disabled,
            indeterminate: this.indeterminate,
            info: this.rootElement.classList.contains('kup-info')
                ? true
                : false,
            label: this.label,
            leadingLabel: this.leadingLabel,
            secondary: this.rootElement.classList.contains('kup-secondary')
                ? true
                : false,
            success: this.rootElement.classList.contains('kup-success')
                ? true
                : false,
            warning: this.rootElement.classList.contains('kup-warning')
                ? true
                : false,
            alert: this.alert,
            error: this.error,
            onBlur: () => this.onKupBlur(),
            onChange: () => this.onKupChange(),
            onFocus: () => this.onKupFocus(),
        };
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <FCheckbox {...props} />
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
