import React from 'react';
import img from '../../Images/faq.png'

const QNA = () => {
    return (
        <div class="container text-center">
            <h3 class=" mt-5 fw-bolder fcolor">Frequently Asked Questions</h3>
            <p>FAQ</p>
            <div class="row g-4 align-items-center d-flex justify-content-center">


                <div class="col-lg-6">
                    <img class="img-fluid" src={img} alt="" />
                </div>


                <div class="col-lg-6 text-start">
                    <div class="accordion" id="accordionExample">

                        <div class="accordion-item ">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5 class="fw-bold py-2 fcolor">What is the medication to do me?</h5>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                    Proin lobortis risus urna iaculis libero aptent. Tristique venenatis dictum facilisi suspendisse proin adipiscing. Torquent efficitur vulputate sollicitudin risus quis nullam dapibus pulvinar ligula laoreet.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5 class="fw-bold py-2 fcolor">How it will function in my body</h5>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                    Proin lobortis risus urna iaculis libero aptent. Tristique venenatis dictum facilisi suspendisse proin adipiscing. Torquent efficitur vulputate sollicitudin risus quis nullam dapibus pulvinar ligula laoreet.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5 class="fw-bold py-2 fcolor">Who should or should not be using this drug?</h5>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                    Proin lobortis risus urna iaculis libero aptent. Tristique venenatis dictum facilisi suspendisse proin adipiscing. Torquent efficitur vulputate sollicitudin risus quis nullam dapibus pulvinar ligula laoreet.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <h5 class="fw-bold py-2 fcolor">When do I start taking them</h5>
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body fw-light text-secondary">
                                    Proin lobortis risus urna iaculis libero aptent. Tristique venenatis dictum facilisi suspendisse proin adipiscing. Torquent efficitur vulputate sollicitudin risus quis nullam dapibus pulvinar ligula laoreet.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QNA;