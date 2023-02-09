import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App.jsx';
import RnR from '../src/Components/RnR/RnR.jsx'
import AddImages from '../src/Components/RnR/AddImages.jsx'
import userEvent from '@testing-library/user-event'



var data = [{
  campus: 'hr-rfe',
  category: 'Hoodie',
  created_at: '2021-08-13T14:37:33.285Z',
  default_price: '947.00',
  description: 'Officia aliquid deserunt voluptate. Nobis modi eius deserunt rerum inventore eos sed distinctio unde. Commodi impedit praesentium atque iste aut et autem quisquam architecto. Non optio natus et in corporis.',
  id: 37322,
  name: 'Garrick Hoodie',
  slogan: 'Blend in to your crows',
  updated_at: "2021-08-13T14:37:33.285Z"
}]

var reviewData = {
  count: 1,
  page: 0,
  product: 37322,
  results: [{
    review_id: 584570,
    rating: 3,
    summary: 'Nemo at consequuntur repudiandae voluptatem',
    recommend: true,
    response: null,
    review_id: 584570,
    reviewer_name: 'Lysanne82',
    summary: 'Nemo at consequuntur repudiandae voluptatem'
  }]
}

var metaData = {
  characteristics: {
    Comfort: {id : 125071, value: '2.9'},
    Fit: {id: 125069, value: '3.3'},
    Length: {id: 125070, value: '3.0303'},
    Quality: {id: 125072, value: '2.909'}
  },
  product_id: '37322',
  ratings: {
    1: '5',
    2: '9',
    3: '5',
    4: '5',
    5: '9'
  },
  recommended: {
    false: '5',
    true: '28'
  }
}

describe('RNR Tests', () => {
  const user = userEvent.setup()
  it('tests RnR', () => {
    //The github link below takes us to the react-testing-library repo, which includes examples of testing.
    //https://github.com/testing-library/react-testing-library#basic-example

    //REPLACE APP WITH YOUR COMPONENT NAME
    render(<RnR currProd={data} currReviews={reviewData} reviewsSort={'relevant'} currMeta={metaData}/>);

    var parent = screen.getByTestId('LeftCard');
    const child_one = screen.getByTestId('LeftCardStars');
    var child_two = screen.getByTestId('LeftCardScales');


    expect(parent).not.toBeInvalid()
    expect(child_two).not.toBeInvalid()
    expect(child_one).not.toBeInvalid()

    expect(parent).toContainElement(child_one)
    expect(parent).toContainElement(child_two)
    expect(parent).toBeVisible();
    expect(child_one).toBeVisible();
    expect(child_two).toBeVisible();
  })

  it('tests Add Images', () => {
    render(<RnR currProd={data} currReviews={reviewData} reviewsSort={'relevant'} currMeta={metaData}/>);
    var addImage = screen.getByTestId('testAddImages');
    expect(addImage).not.toBeInvalid();
    expect(addImage).toBeVisible();

    const image_one = screen.getByTestId('Add Image One')
    const image_two = screen.getByTestId('Add Image Two')
    const image_three = screen.getByTestId('Add Image Three')
    const image_four = screen.getByTestId('Add Image Four')
    const image_five = screen.getByTestId('Add Image Five')

    //I think Modals are always 'visible'
    return user.click(screen.getByRole('button', {name: 'Add Review +'}))
      .then(() => {
        expect(image_one).not.toBeVisible();
        expect(image_two).not.toBeVisible();
        expect(image_three).not.toBeVisible();
        expect(image_four).not.toBeVisible();
        expect(image_five).not.toBeVisible();
      })
      .then(() => {
        fireEvent.click(screen.getByRole('button', {name: 'Add Images'}));
        expect(image_one).toBeVisible();
        expect(image_two).toBeVisible();
        expect(image_three).toBeVisible();
        expect(image_four).toBeVisible();
        expect(image_five).toBeVisible();
      })
      .then(() => {
        fireEvent.change(image_one, {target : {value : 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png'}})
        expect(image_one.value).toBe('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png')
      })
      .then(() => {
        fireEvent.change(image_two, {target : {value : 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png'}})
        expect(image_two.value).toBe('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png')
      })
      .then(() => {
        fireEvent.change(image_three, {target : {value : 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png'}})
        expect(image_three.value).toBe('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png')
      })
      .then(() => {
        fireEvent.change(image_four, {target : {value : 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png'}})
        expect(image_four.value).toBe('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png')
      })
      .then(() => {
        fireEvent.change(image_five, {target : {value : 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png'}})
        expect(image_five.value).toBe('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/ultimae_roadster/menu_aven_ulti_rds.png')
      })
  })


  it('tests Add Review', () => {
    //The github link below takes us to the react-testing-library repo, which includes examples of testing.
    //https://github.com/testing-library/react-testing-library#basic-example

    //REPLACE APP WITH YOUR COMPONENT NAME
    render(<RnR currProd={data} currReviews={reviewData} reviewsSort={'relevant'} currMeta={metaData}/>);

    const revBody = screen.getByTestId('AddRev Form');
    expect(revBody).not.toBeVisible();
    var addReviewButton = screen.getByRole('button', {name: 'Add Review +'});
    fireEvent.click(addReviewButton)
    expect(revBody).toBeVisible();
    fireEvent.change(revBody, {target: {value: 'This is the body'}});
    expect(revBody.value).toBe('This is the body');

    var reviewSubmitButton = screen.getByRole('button', {name: 'Submit'});



  })
})
