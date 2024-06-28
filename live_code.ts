function tryAgain(): void {
  const postLogoutUrl = getQueryParamValue('post_logout_url');
  const queryParams = { invalidate_tokens: 'true', target_url: postLogoutUrl || '' };
  const searchParams = new URLSearchParams(queryParams);
  window.location.href = `${window.location.origin}/am/tide/logout?${searchParams}`;
}
