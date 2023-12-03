<template>
	<div>
		<b-container>
			<b-col lg="12" md="12" sm="12" cols="12">
				<b-card style="border: none">
					<div>
						<b-row class="text-center text-muted">
							<b-col cols="6">Product</b-col>
    						<b-col cols="6">Total</b-col>
						</b-row>
						<b-row class="mb-3">
							<b-col>
								<div class="border border-muted p-4" style="border-radius: 12px;">
									<div class="d-flex">
										<div class="border-right text-center" style="width: 10%;">
											Image
										</div>
										<div class="pl-5" style="display: flex; align-items: center; width: 25%;">
											<div>
												<div style="font-weight: bold;">
													1K Followers
												</div>
												<div class="text-muted" style="font-size: 12px;">
													Show order information
													<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
													  	<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
													</svg>
												</div>
											</div>
										</div>
										<div class="pl-5" style="display: flex; align-items: center; width: 40%;">
											<div class="border border-muted p-3" style="border-radius: 12px; font-size: 15px;">
												<b-form-checkbox
											      	id="checkbox-1"
											      	v-model="status"
											      	name="checkbox-1"
											      	value="accepted"
											      	unchecked-value="not_accepted"
											    >
											    	<span>Add +500 followers for</span> 
											    	<span style="font-weight: bold;">$4.87</span> 
											    	$6.50
											    </b-form-checkbox>
											</div>
										</div>
										<div class="pl-5 text-muted" style="font-size: 20px; font-weight: bold; display: flex; align-items: center; width: 15%;">
											$12.00
										</div>
										<div class="text-muted pl-5" style="font-size: 20px; font-weight: bold; display: flex; align-items: center; width: 10%;">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
											  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
											</svg>
										</div>
									</div>
								</div>
							</b-col>
						</b-row>
						<b-row>
							<b-col>
								<b-button variant="outline-info" class="">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
									  	<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
									</svg>
									Add item
								</b-button>
							</b-col>
						</b-row>
					</div>
				</b-card>
			</b-col>
		</b-container>
	</div>
</template>