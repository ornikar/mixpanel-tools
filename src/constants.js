/**
 * MixpanelTool chrome extension
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const MIXPANEL_PROPERTIES = [
  "$os",
  "$browser",
  "$referrer",
  "$referring_domain",
  "$current_url",
  "$browser_version",
  "$screen_height",
  "$screen_width",
  "mp_lib",
  "$lib_version",
  "distinct_id",
  "$initial_referrer",
  "$initial_referring_domain",
  "token",
  "$duration",
  "$__c",
  "$user_id",
  "$insert_id",
  "$device_id",
  "$anon_distinct_id"
];

// API changes based on the PR from @aonic - https://github.com/nithincvpoyyil/mixpanel-tools/pull/3

const MIXPANEL_API_PATTERN = /\/\/mp\.(staging-[a-z]{2}-)?(onroad|ornikar)\.(com|to)\/(track|engage)/i;
