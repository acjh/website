# Developer Guide
* [Coding Standards](#coding-standards)
* [How to preview changes](#how-to-preview-changes)
    * [Preview a week in schedule](#preview-a-week-in-schedule)
    * [Preview a handbook section](#preview-a-handbook-section)
    * [Preview local files in Google Chrome](#preview-local-files-in-google-chrome)

## Coding Standards
* [JavaScript](https://docs.google.com/document/d/1gZ6WG6HBTJYHAtVkz9kzi_SUuzfXqzO-SvFnLuag2xM/pub?embedded=true)
* [CSS](https://docs.google.com/document/d/1wA9paRA9cS7ByStGbhRRUZLEzEzimrNQjIDPVqy1ScI/pub)
* [HTML](https://oss-generic.github.io/process/codingstandards/coding-standards-html.html)

## How to preview changes

#### Preview a week in schedule
[`.../contents/week.html?preview=1`](http://rawgit.com/acjh/website/89-make-page-fragments-previewable/contents/week.html?preview=1)
> `preview` can be any of weeks `0`-`14`.

#### Preview a handbook section
[`.../contents/handbook.html?preview=preliminaries`](http://rawgit.com/acjh/website/89-make-page-fragments-previewable/contents/handbook.html?preview=preliminaries)
> `preview` can be any section/subsection in `handbook.html`, **without** the `handbook-` prefix.

#### Preview local files in Google Chrome
You will need to start Chrome with the flag `--allow-file-access-from-files`:
* The path for Chrome can be found at `chrome://version`.
* All windows for Chrome **must** be closed before launching.
* You may create a shortcut to launch Chrome with this flag.
