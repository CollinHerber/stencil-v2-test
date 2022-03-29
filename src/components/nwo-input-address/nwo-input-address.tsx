import {Component, h, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
	tag: 'nwo-input-address',
	styleUrls: ['nwo-input-address.scss'],
	//Shadow must be false in order for the slds classes to pass down into the components (without the :root tag)
	shadow: false,
})
export class NwoInputAddress {
	@Prop() required: boolean = true;
	@Prop() label: string = 'Enter Address';
	@Prop() placeholder: string = 'Enter Address...';
	@Prop({mutable: true}) street: string;
	@Prop({mutable: true}) city: string;
	@Prop({mutable: true}) state: string;
	@Prop({mutable: true}) country: string;
	@Prop({mutable: true}) zip: string;
	@Event() changed: EventEmitter;

	changedHandler() {
		this.changed.emit({
			state: this.state,
			street: this.street,
			city: this.city,
			country: this.country,
			zip: this.country
		});
		console.log('Sent Event');
	}

	billingAddressInput: HTMLInputElement;
	billingAddressAutocomplete: any;
	googleMapsApi: any;
	googleMapsApiKey = 'AIzaSyBwRB5w56D8uTYXbNythSvbzJykWFqhgQg';

	componentDidLoad() {
		if ('google' in window) {
			this.googleMapsApi = window['google']['maps'];
		} else {
			const script = document.createElement('script');
			script.onload = () => {
				this.googleMapsApi = window['google']['maps'];
				this.loadGooglePlacesInput();
			};
			script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}&libraries=places`;
			document.body.appendChild(script);
		}
	}

	loadGooglePlacesInput() {
		this.billingAddressAutocomplete = new this.googleMapsApi.places.Autocomplete(this.billingAddressInput, {});
		this.googleMapsApi.event.addListener(this.billingAddressAutocomplete, 'place_changed', () => {
			const addressData = this.billingAddressAutocomplete.getPlace();
			for (let i = 0; i < addressData.address_components.length; i++) {
				const addressPart = addressData.address_components[i];
				if (addressPart.types.includes('locality')) {
					this.city = addressPart.long_name;
				}

				if (addressPart.types.includes('administrative_area_level_1')) {
					this.state = addressPart.short_name;
				}

				if (addressPart.types.includes('country')) {
					this.country = addressPart.short_name;
				}

				if (addressPart.types.includes('postal_code')) {
					this.zip = addressPart.short_name;
				}
			}
			this.street = addressData.name;
			this.changedHandler();
		});
	}

	render() {
		return (
			<section>
				<div class="slds-grid slds-gutters slds-wrap">
					<div class="slds-col slds-size--1-of-1">
						<div class="slds-form-element">
							<label class="slds-form-element__label" htmlFor="places-input">
								{this.required ? <abbr class="slds-required" title="required">* </abbr> : null}
								{this.label}
							</label>
							<div class="slds-form-element__control">
								<input
									autocomplete="off"
									required={this.required}
									type="text"
									id="places-input"
									ref={(el) => this.billingAddressInput = el as HTMLInputElement}
									placeholder={this.placeholder}
									class="slds-input"
								/>
							</div>
						</div>
					</div>
					<div class="slds-col slds-size--1-of-1">
						<div class="slds-form-element">
							<label class="slds-form-element__label" htmlFor="street-input">
								Street
							</label>
							<div class="slds-form-element__control">
                				<textarea
									id="street-input"
									placeholder=""
									class="slds-textarea"
									value={this.street}
								></textarea>
							</div>
						</div>
					</div>
					<div class="slds-col slds-size--1-of-2">
						<div class="slds-form-element">
							<label class="slds-form-element__label" htmlFor="places-input">
								{this.required ? <abbr class="slds-required" title="required">* </abbr> : null}
								City
							</label>
							<div class="slds-form-element__control">
								<input
									type="text"
									id="places-input"
									class="slds-input"
									value={this.city}
								/>
							</div>
						</div>
					</div>
					<div class="slds-col slds-size--1-of-2">
						<div class="slds-form-element">
							<label class="slds-form-element__label" htmlFor="places-input">
								{this.required ? <abbr class="slds-required" title="required">* </abbr> : null}
								Province
							</label>
							<div class="slds-form-element__control">
								<input
									type="text"
									id="places-input"
									class="slds-input"
									value={this.state}
								/>
							</div>
						</div>
					</div>
					<div class="slds-col slds-size--1-of-2">
						<div class="slds-form-element">
							<label class="slds-form-element__label" htmlFor="places-input">
								{this.required ? <abbr class="slds-required" title="required">* </abbr> : null}
								Zip
							</label>
							<div class="slds-form-element__control">
								<input
									type="text"
									id="places-input"
									class="slds-input"
									value={this.zip}
								/>
							</div>
						</div>
					</div>
					<div class="slds-col slds-size--1-of-2">
						<div class="slds-form-element">
							<label class="slds-form-element__label" htmlFor="places-input">
								{this.required ? <abbr class="slds-required" title="required">* </abbr> : null}
								Country
							</label>
							<div class="slds-form-element__control">
								<input
									type="text"
									id="places-input"
									class="slds-input"
									value={this.country}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
