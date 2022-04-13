
import {fetchAllComments,postComment,deleteAllComments} from '../../Api'
const { pactWith } = require("jest-pact")
const { Matchers } = require("@pact-foundation/pact")



pactWith(
  { consumer: "guestLedgerBookClient", provider: "guestLedgerBookApi" },
  provider => {

    describe("get comments", () => {
      const COMMENT_DATA = [
        {
            email:"test@example.com",
            content:"test"
        },
      ]

      const commentSuccessResponse = {
        status: 200,
        body: Matchers.eachLike({
          email:"test@example.com",
          content:"test"
      }),
      }

      const commentListRequest = {
        uponReceiving: "a request for comments",
        withRequest: {
          method: "GET",
          path: "/comments",
          headers: {
            Accept: "application/json",
          },
        },
      }

      beforeEach(() => {
        const interaction = {
          state: "i have a list of comments",
          ...commentListRequest,
          willRespondWith: commentSuccessResponse,
        }
        return provider.addInteraction(interaction)
      })
      
      // add expectations
      it("returns a successful body", () => {
        return fetchAllComments(provider.mockService.baseUrl).then(comm => {
          expect(comm).toEqual(COMMENT_DATA)
        })
      })
    })

    describe("delete comments", () => {

      const commentSuccessResponse = {
        status: 200
      }

      const commentDeleteRequest = {
        uponReceiving: "a request for deleting comments",
        withRequest: {
          method: "DELETE",
          path: "/comments",
        },
      }

      beforeEach(() => {
        const interaction = {
          state: "i will delete comments",
          ...commentDeleteRequest,
          willRespondWith: commentSuccessResponse,
        }
        return provider.addInteraction(interaction)
      })
      
      // add expectations
      it("returns a successful body", () => {
        return deleteAllComments(provider.mockService.baseUrl).then(comm => {
          expect(comm).toEqual("")
        })
      })
    })


    describe("post comment", () => {
      const COMMENT_DATA =
        {
            email:"test@example.com",
            content:"test"
        }

      const commentSuccessResponse = {
        status: 200
      }

      const commentListRequest = {
        uponReceiving: "post request for a comment",
        withRequest: {
          method: "POST",
          path: "/comments",
          headers: {
            "Content-Type": "application/json",
          },
          body:COMMENT_DATA
        },
      }

      beforeEach(() => {
        const interaction = {
          state: "i will post a comment",
          ...commentListRequest,
          willRespondWith: commentSuccessResponse,
        }
        return provider.addInteraction(interaction)
      })
      
      // add expectations
      it("returns a successful body", () => {
        return postComment(COMMENT_DATA,provider.mockService.baseUrl).then(comm => {
          expect(comm).toEqual("")
        })
      })
    })
  }
  )