import {Component, h, State, Listen} from '@stencil/core';

@Component({
	tag: 'component-viewer',
	styleUrl: 'component-viewer.scss',
	shadow: false,
})
export class ComponentViewer {

	availableComponents = [
		"Address Input"
	]
	@State() activeComponent = this.availableComponents[0];
	@State() eventData;

	getRenderedComponent() {
		switch (this.activeComponent) {
			case this.availableComponents[0]:
				return (<nwo-input-address></nwo-input-address>);
			default:
				return 'No Component';
		}
	}

	@Listen('changed')
	changeHappened(event) {
		this.eventData = event.detail;
	}

	selectComponent(component) {
		this.activeComponent = component;
	}

	render() {
		return (
			<section>
				<div class="slds-grid">
					<div class="slds-col slds-size--1-of-4">
						Choose Component
						<ul class="slds-has-dividers_bottom-space">
							{this.availableComponents.map((component) =>
								<li class="slds-item slds-m-vertical--medium">
									<div class="slds-text-heading_small"
										 onClick={() => this.selectComponent(component)}>{component}</div>
								</li>
							)}
						</ul>
					</div>
					<div class="slds-col slds-size--3-of-4">
						<div class="">
							Active Component : {this.activeComponent}
						</div>
						<div class="render-area">
							{this.getRenderedComponent()}
						</div>
						{ this.eventData ?
							<div class="event-area">
								We received an event with the following data: <br/>
								{JSON.stringify(this.eventData)}
							</div>
							: null
						}
					</div>
				</div>
			</section>
		);
	}
}
