import React from "react"
import { CategoriesWidget } from "./CategoriesWidget"
import { TagsWidget } from "./TagsWidget"
import { SocialFollows } from "../social/SocialFollows"
import { RecentPosts } from "./RecentPosts"

export const Widget = ({ widget }) => {
  switch (widget) {
    case "SocialFollow":
      return <SocialFollows />
    case "RecentPosts":
      return <RecentPosts />
    case "Categories":
      return <CategoriesWidget />
    case "Tags":
      return <TagsWidget />

    default:
      return ""
  }
}
