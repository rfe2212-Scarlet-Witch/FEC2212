1.1 Overview
-Image gallery
--Images

-Product Information
--Data about products, including pricing, possible sales, availability, etc.
---star rating (reviews rounded to x.25)
---product category
---product title
---price (updates according to current style of item selected) (every item will have a default style)
---product overview
---share on social media buttons

-Style Selector
--allows user to select the style of the product that they want
---styles will be represented as a thumbnail
---no limit to number of styles a product has, should be displayed in rows of 4

-Add To Cart
--allows users to add a product to their cart
---size selector dropdown (should only display sizes currently in stock) (if no sizes are available the dropdown should become inactive and read "OUT OF STOCK") (when collapsed, the dropdown should show the currently selected size) (by default the dropdown should display "select size")
---quantity selector dropdown (integer will be however much the item has in stock but will be <=15) (if size has not yet been selected, this dropdown will say "-" and be disabled) (once a size is selected, the dropdown should display "1")
---add to cart (if size has not been selected, this button will display a dropdown stating “Please select size”.) (if there is no stock, the button should be hidden) (if both a size and quantity are selected, the button will add items to the users cart)

1.2 Ratings and Reviews
-List of Reviews
--Standard Size
--Display 2 tiles
---If > 2 Reviews listed, then 'More Reviews' button will appear.
----More Reviews on click shows 2 more reviews, below original reviews.
-----If there are more reviews still to be loaded, 'More Reviews' button will remain.
-----If no more reviews, button will disappear
--Reviews tab will fit on the size of one screen, with more reviews being scrollable.
---If not enough for a scroll to be needed, no scroll
--If no reviews have been submitted, list will collapse, button to submit new review will appear near top of module.
--Future Enhancement exists here.

-Individual Review Tile
--Each review will be on single tile containing
	- Star Rating
		-Up to a quarter of a review point accuracy.
	-Date of Review
		--m/d/yyyy
	-Review Summary
		-1 sentence summary, 60 char cap.
		--Bolded, appears above full review.
	-Review Body
		-50-1000 characters long
		-Up to 5 images
		-Default: 250 chars to display
			->250 chars, show more button appears
		-Any images -> thumbnails below the review text
			-Click thumbnail, image shows in modal window, display full res.
				-Close thumbnail option only
		-Recommend- if reviewer recommends buying product, 'I recommend this product' and checkmark icon displays below review. If not recommend, nothing is displayed.
		-Reviewer name - username for reviewer, only username.
			-If reviewers email is associated with a purchase, verified purchaser tag Will appear.
		-Response to Review
			-If review has response, it appears below the reviewer name. Response preceded by text, 'response from seller' Visually distinguished.
		-Rating Helpfulness, Any user can denote if review was helpful with two buttons at the bottom, Was this Review Helpful, yes or no. Include count of yeses and nos. Clicking either will cast vote for selection and increment.
		-One submission for each review, if they reviewed, they cannot review again.
	-Sorting Options
		-Helpful, Newest, Relevant


1.3 Q & A

Does changes here get pulled to main or fork?

USAGE
--------------------------------------------------------------------------------------------------------



## Install and setup 🧶 Yarn.
To manage our dependencies we will be using a package manager called 🧶 Yarn. You can learn more about it [here](https://yarnpkg.com/).

### Yarn Installation
```bash
npm i -g yarn
```
To begin (after installing yarn); Type ( yarn install ) into the terminal and hit enter; This will install all the dependenices.

Afterwards to begin devlopment run (yarn start) then run (yarn dev) to see in the output in local host 300.

### Jest Installation
run "npx jest --init"